import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { screensReducer } from './slices/screens.slice';
import { activeScreenReducer } from './slices/screen.slice';

export const store = configureStore({
  reducer: {
    activeScreen: activeScreenReducer,
    screens: screensReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
