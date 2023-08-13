import cities, { City } from 'cities.json';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { GameStep } from '../WeatherGame.types';
import { generateRandomInt } from '@/utils';
import {
  StyledButton,
  StyledInputNumber,
  StyledParagraph,
} from '../WeatherGame.styles';
import { useLazyGetCurrentWeatherQuery } from '@/api/weather';

const STEPS_NUMBER = 5;
const OVERSIGHT = 5;

const getRandomCities: (array: City[], count: number) => any[] = (
  array,
  count
) => {
  const randomIndexes: number[] = [];

  while (randomIndexes.length < count) {
    const randomIndex = generateRandomInt(0, array.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  return randomIndexes.map((index) => array[index]);
};

const generateStatueses = (
  status: GameStep['status'],
  count: number
): GameStep['status'][] => {
  const statuses: GameStep['status'][] = [];
  for (let i = 0; i < count; i++) {
    statuses.push(status);
  }
  return statuses;
};

const useWeatherGame = () => {
  const [stepStatuses, setStepStatuses] = useState<GameStep['status'][]>(
    generateStatueses('wait', STEPS_NUMBER)
  );
  const [isResultDisplayed, setResultDisplayedStatus] =
    useState<boolean>(false);
  const [getCurrentWeather] = useLazyGetCurrentWeatherQuery();
  const [temperature, setTemperature] = useState(0);
  const [gameResult, setGameResult] = useState({
    mistakes: 0,
    total: STEPS_NUMBER,
  });
  const [currentStep, setCurrentStep] = useState(0);

  const randomCities = useMemo(() => getRandomCities(cities, STEPS_NUMBER), []);

  const handleTemperatureChange = (temp: number) => setTemperature(temp);

  const setCurrentStepStatus = useCallback(
    (status: GameStep['status']) => {
      setStepStatuses((prevState) => {
        prevState[currentStep] = status;
        return [...prevState];
      });
    },
    [currentStep]
  );

  const handleCheckTemperature = useCallback(async () => {
    const city = randomCities[currentStep];
    const { data } = await getCurrentWeather({
      lat: city.lat,
      lon: city.lng,
      units: 'metric',
    });

    if (data) {
      if (Math.abs(data.main.temp - temperature) < OVERSIGHT) {
        setCurrentStepStatus('finish');
      } else {
        setCurrentStepStatus('error');
      }

      setResultDisplayedStatus(true);
      setTimeout(() => {
        setResultDisplayedStatus(false);
        if (currentStep + 1 < STEPS_NUMBER) {
          setCurrentStep((prevStep) => prevStep + 1);
        }
      }, 3000);
    }
  }, [
    randomCities,
    currentStep,
    getCurrentWeather,
    temperature,
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

  return {
    steps,
    temperature,
    isResultDisplayed,
    handleCheckTemperature,
    handleTemperatureChange,
    currentStep,
  };
};

export default useWeatherGame;
