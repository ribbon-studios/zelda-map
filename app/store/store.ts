import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { screenReducer } from './slices/screen.slice';
import { tileReducer } from './slices/tile.slice';

export const store = configureStore({
  reducer: {
    tiles: tileReducer,
    screen: screenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
