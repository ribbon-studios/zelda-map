import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Sprites } from '../../constants/sprites';
import { explodeCoordPairs, screenCoordToIndex } from '../../utils/screens';
import { ScreensRepo } from '../../components/db/screens';
import { initializeScreens } from '../thunks/screens.thunks';
import type { ActiveScreen } from './screen.slice';
import { tileCoordToIndex } from '../../utils/tiles';
import { TilesRepo } from '../../components/db/tiles';

export const DEFAULT_VISIBLE_SCREENS = explodeCoordPairs(
  '6-10,0',
  '5-11,1',
  '3-12,2',
  '2-14,3',
  '2-15,4',
  '1-15,5',
  '0-15,6-7'
);

export type Tile = {
  x: number;
  y: number;
  sprite?: Sprites;
};

export type Screen = {
  x: number;
  y: number;
  tiles: Tile[];
  visible: boolean;
};

const screensSlice = createSlice({
  initialState: [] as Screen[],
  name: 'screen',
  reducers: {
    toggleScreenVisibility(state, { payload }: PayloadAction<Screen>) {
      const index = screenCoordToIndex(payload.x, payload.y);

      state[index].visible = !state[index].visible;

      ScreensRepo.updateVisible(state[index]);

      return state;
    },
    updateTileSprite(state, { payload: [activeScreen, activeTile] }: PayloadAction<[ActiveScreen, Tile]>) {
      const screenIndex = screenCoordToIndex(activeScreen.x, activeScreen.y);
      const tileIndex = tileCoordToIndex(activeTile.x, activeTile.y);

      const screen = state[screenIndex];
      const tile = screen.tiles[tileIndex];

      tile.sprite = tile.sprite === undefined ? Sprites.OCTOROK : undefined;

      TilesRepo.updateSprite(state[screenIndex], tile);

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeScreens.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { toggleScreenVisibility, updateTileSprite } = screensSlice.actions;
export const screensReducer = screensSlice.reducer;

export const selectScreens = (state: RootState): Screen[] => {
  return state.screens;
};

export const selectScreen =
  (x: number, y: number) =>
  (state: RootState): Screen | undefined => {
    return selectScreens(state)[screenCoordToIndex(x, y)];
  };

export const selectTiles =
  (x: number, y: number) =>
  (state: RootState): Tile[] | undefined => {
    return selectScreen(x, y)(state)?.tiles;
  };
