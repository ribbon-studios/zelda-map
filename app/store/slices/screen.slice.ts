import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type ScreenState = {
  x: number;
  y: number;
  locked: boolean;
};

const screenSlice = createSlice({
  initialState: {
    x: 7,
    y: 7,
    locked: false,
  } as ScreenState,
  name: 'screen',
  reducers: {
    toggleScreenLock(state, action: PayloadAction<Omit<ScreenState, 'locked'>>) {
      if (action.payload.x !== state.x || action.payload.y !== state.y) {
        return {
          ...action.payload,
          locked: true,
        };
      }

      return {
        ...state,
        locked: !state?.locked,
      };
    },
    setScreen(state, action: PayloadAction<Omit<ScreenState, 'locked'>>) {
      return {
        ...action.payload,
        locked: false,
      };
    },
  },
});

export const { setScreen, toggleScreenLock } = screenSlice.actions;
export const screenReducer = screenSlice.reducer;

export const selectScreen = (state: RootState): ScreenState => {
  return state.screen ?? null;
};

export const isScreenLocked =
  (x: number, y: number) =>
  (state: RootState): boolean => {
    return state.screen.x === x && state.screen.y === y && state.screen.locked;
  };

export const isAnyScreenLocked = (state: RootState): boolean => {
  return state.screen.locked;
};
