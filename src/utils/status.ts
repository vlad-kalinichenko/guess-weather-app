import { StepProps } from 'antd';

export const generateStatueses = (
  status: StepProps['status'],
  count: number
): StepProps['status'][] => {
  const statuses: StepProps['status'][] = [];
  for (let i = 0; i < count; i += 1) {
    statuses.push(status);
  }
  return statuses;
};
