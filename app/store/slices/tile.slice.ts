import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Sprites } from '../../constants/sprites';

export type Tile = {
  x: number;
  y: number;
  sprite?: Sprites;
};
export type TileState = Record<string, Tile>;

const tileSlice = createSlice({
  initialState: {} as TileState,
  name: 'screen',
  reducers: {
    setTile(state, { payload }: PayloadAction<Tile>) {
      return {
        ...state,
        [`${payload.x},${payload.y}`]: payload,
      };
    },
  },
});

export const { setTile } = tileSlice.actions;
export const tileReducer = tileSlice.reducer;

export const selectTiles = (state: RootState): TileState => {
  return state.tiles;
};

export const selectTile =
  (x: number, y: number) =>
  (state: RootState): Tile | null => {
    return selectTiles(state)[`${x},${y}`] ?? null;
  };
