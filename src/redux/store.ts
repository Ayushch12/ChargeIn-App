// src/appcharge-in/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/authReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
