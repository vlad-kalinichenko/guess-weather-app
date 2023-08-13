import { Result } from 'antd';
import { Component, ErrorInfo } from 'react';

interface Props {
  children: JSX.Element;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
        />
      );
    }

    const { children } = this.props;

    return children;
  }
}

export default ErrorBoundary;
