import cities, { City } from 'cities.json';
import { useCallback, useMemo, useState } from 'react';
import { message } from 'antd';
import type { GameStep } from '../WeatherGame.types';
import { getRandomCities, generateStatueses } from '@/utils';
import { StyledParagraph } from '../WeatherGame.styles';
import { useLazyGetCurrentWeatherQuery } from '@/api/weather';

const STEPS_NUMBER = 5;
const MAX_MISTAKES_NUMBER = 3;
const OVERSIGHT = 5;

const useWeatherGame = () => {
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [stepStatuses, setStepStatuses] = useState<GameStep['status'][]>(
    generateStatueses('wait', STEPS_NUMBER)
  );
  const [getCurrentWeather] = useLazyGetCurrentWeatherQuery();
  const [temperature, setTemperature] = useState<number | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const randomCities = useMemo(() => getRandomCities(cities, STEPS_NUMBER), []);

  const setCurrentStepStatus = useCallback(
    (status: GameStep['status']) => {
      if (status === 'error') {
        setMistakes((prev) => prev + 1);
      }
      setStepStatuses((prevState) => {
        prevState[currentStep] = status;
        return [...prevState];
      });
    },
    [currentStep]
  );

  const displayAnswerResult = useCallback(() => {
    if (currentStep + 1 < STEPS_NUMBER) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsGameOver(true);
    }
  }, [currentStep]);

  const handleCheckTemperature = useCallback(async () => {
    const { lat, lng, name } = randomCities[currentStep];
    const { data } = await getCurrentWeather({
      lat,
      lon: lng,
      units: 'metric',
    });

    if (data && temperature) {
      const { main } = data;

      if (Math.abs(main.temp - temperature) < OVERSIGHT) {
        setCurrentStepStatus('finish');
        message.success(
          `Your answer is very close! The temperature in ${name} is ${main.temp} °C`
        );
      } else {
        setCurrentStepStatus('error');
        message.error(
          `Sorry but your answer is not even close! The temperature in ${name} is ${main.temp} °C`
        );
      }
      setTemperature(null);
      displayAnswerResult();
    }
  }, [
    randomCities,
    currentStep,
    getCurrentWeather,
    temperature,
    displayAnswerResult,
    setCurrentStepStatus,
  ]);

  const steps: GameStep[] = useMemo(
    () =>
      randomCities.map((city: City, index) => ({
        key: city.name,
        title: city.name,
        status: stepStatuses[index],
        content: (
          <StyledParagraph>
            What is the temperature in {city.name} ?
          </StyledParagraph>
        ),
      })),
    [randomCities, stepStatuses]
  );

  const startOver = () => {
    setCurrentStep(0);
    setMistakes(0);
    setIsGameOver(false);
    setStepStatuses(generateStatueses('wait', STEPS_NUMBER));
  };

  return {
    steps,
    isUserWin: mistakes < MAX_MISTAKES_NUMBER,
    isGameOver,
    temperature,
    handleCheckTemperature,
    setTemperature,
    startOver,
    currentStep,
  };
};

export default useWeatherGame;
