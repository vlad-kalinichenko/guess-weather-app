import { FC } from 'react';
import { Col, Steps, Typography } from 'antd';
import useWeatherGame from './hooks/useWeatherGame';
import {
  StyledHeader,
  StyledRow,
  StyledLayout,
  StyledInputNumber,
  StyledButton,
} from './WeatherGame.styles';

const { Title } = Typography;

const WeatherGame: FC = () => {
  const {
    steps,
    temperature,
    handleTemperatureChange,
    handleCheckTemperature,
    currentStep,
  } = useWeatherGame();

  return (
    <StyledLayout>
      <StyledHeader>
        <Title level={2}>Fareplace Homework – Weather Game</Title>
      </StyledHeader>
      <StyledRow justify="center">
        <Col xs={22} sm={20} md={16} lg={12}>
          <Steps
            responsive={false}
            size="small"
            current={currentStep}
            items={steps}
          />
          {steps[currentStep].content}
          <StyledInputNumber
            value={temperature}
            type="number"
            max={100}
            min={-100}
            onChange={(value: number) => handleTemperatureChange(value)}
            size="large"
            prefix="°C"
          />
          <StyledButton onClick={handleCheckTemperature}>
            Send answer
          </StyledButton>
        </Col>
      </StyledRow>
    </StyledLayout>
  );
};

export default WeatherGame;
