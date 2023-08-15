import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type ScreenState = {
  x: number;
  y: number;
};

type State = ScreenState | null;

const screenSlice = createSlice({
  initialState: {
    x: 7,
    y: 7,
  } as State,
  name: 'screen',
  reducers: {
    setScreen(state, action: PayloadAction<State>) {
      return action.payload;
    },
  },
});

export const { setScreen } = screenSlice.actions;
export const screenReducer = screenSlice.reducer;

export const selectScreen = (state: RootState): ScreenState | null => {
  return state.screen ?? null;
};
