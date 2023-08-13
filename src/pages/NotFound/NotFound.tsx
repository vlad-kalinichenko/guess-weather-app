import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  const backToHomePage = () => navigate('/');

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={backToHomePage} type="primary">
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
