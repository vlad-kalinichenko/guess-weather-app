import { message } from 'antd';

import type { Middleware } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';

export const errorHandler: Middleware = () => (next) => (action) => {
  const errorMessage = action.payload?.data?.message;

  if (isRejectedWithValue(action) && errorMessage) {
    message.error(errorMessage);
  }

  return next(action);
};
