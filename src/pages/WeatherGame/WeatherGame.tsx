import { FC } from 'react';
import { Button, Col, Result, Steps, Typography, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
import useWeatherGame from './hooks/useWeatherGame';
import {
  StyledHeader,
  StyledRow,
  StyledLayout,
  StyledButton,
} from './WeatherGame.styles';

const { Title } = Typography;

const WeatherGame: FC = () => {
  const { t } = useTranslation();
  const {
    steps,
    isUserWin,
    temperature,
    isGameOver,
    startOver,
    setTemperature,
    handleCheckTemperature,
    currentStep,
  } = useWeatherGame();

  return (
    <StyledLayout>
      <StyledHeader>
        <Title level={2}>{t('title')}</Title>
      </StyledHeader>
      <StyledRow justify="center">
        <Col xs={22} sm={20} md={16} lg={12}>
          <Steps size="small" current={currentStep} items={steps} />
          {isGameOver ? (
            <Result
              status={isUserWin ? 'success' : 'error'}
              title={isUserWin ? t('youWon') : t('youLost')}
              extra={[<Button onClick={startOver}>{t('startOver')}</Button>]}
            />
          ) : (
            <>
              {steps[currentStep].content}
              <InputNumber
                style={{ width: '100%' }}
                placeholder={t('pleaseEnterValue')}
                max={100}
                min={-100}
                value={temperature}
                onChange={(value) => setTemperature(value)}
                size="large"
                prefix="°C"
              />
              <StyledButton
                disabled={!temperature}
                onClick={handleCheckTemperature}
              >
                {t('sendAnswer')}
              </StyledButton>
            </>
          )}
        </Col>
      </StyledRow>
    </StyledLayout>
  );
};

export default WeatherGame;
