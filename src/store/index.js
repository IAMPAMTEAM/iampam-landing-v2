import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import registerReducer from './register.js';
import authReducer from './auth.js';
import { thunk } from 'redux-thunk';

const store = configureStore(
  {
    reducer: {
      register: registerReducer,
      auth: authReducer,
    },
  },
  applyMiddleware(thunk)
);

export default store;
