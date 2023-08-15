import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { screenReducer } from './slices/screen.slice';

export const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
