import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { setupStore } from './store';
import { ErrorBoundary } from '@/components';
import '@/services/localization';

const store = setupStore();
const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
