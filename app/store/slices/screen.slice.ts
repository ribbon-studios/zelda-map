import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Screen } from './screens.slice';

export type ActiveScreen = {
  x: number;
  y: number;
  locked: boolean;
};

const initialState: ActiveScreen = {
  x: 7,
  y: 7,
  locked: true,
};

const activeScreenSlice = createSlice({
  initialState,
  name: 'activeScreen',
  reducers: {
    toggleScreenLock(state, { payload: screen }: PayloadAction<Screen>) {
      if (state.x === screen.x && state.y === screen.y) {
        return {
          ...state,
          locked: !state.locked,
        };
      }

      return {
        ...screen,
        locked: true,
      };
    },
    setActiveScreen(state, { payload: screen }: PayloadAction<Screen>) {
      return {
        x: screen.x,
        y: screen.y,
        locked: false,
      };
    },
  },
});

export const { setActiveScreen, toggleScreenLock } = activeScreenSlice.actions;
export const activeScreenReducer = activeScreenSlice.reducer;

export const selectActiveScreen = (state: RootState): ActiveScreen => {
  return state.activeScreen;
};

export const isAnyScreenLocked = (state: RootState): boolean => {
  return selectActiveScreen(state).locked;
};

export const isScreenLocked =
  (screen: Screen) =>
  (state: RootState): boolean => {
    const selectedScreen = selectActiveScreen(state);

    return selectedScreen.locked && selectedScreen.x === screen.x && selectedScreen.y === screen.y;
  };
