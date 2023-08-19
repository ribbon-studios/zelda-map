import { createAsyncThunk } from '@reduxjs/toolkit';
import { ScreensRepo } from '../../components/db/screens';
import { Screens, Tiles } from '../../constants/map';
import { containsCoordinates, indexToScreenCoord } from '../../utils/screens';
import { indexToTileCoord } from '../../utils/tiles';
import { DEFAULT_VISIBLE_SCREENS, Screen, Tile } from '../slices/screens.slice';

export const initializeScreens = createAsyncThunk('screens/init', async () => {
  try {
    let screens = await ScreensRepo.getScreens();

    if (screens.length === 0) {
      screens = Array(Screens.COLUMNS * Screens.ROWS)
        .fill(null)
        .map<Screen>((_, index) => {
          const [x, y] = indexToScreenCoord(index);

          return {
            x,
            y,
            tiles: Array(Tiles.COLUMNS * Tiles.ROWS)
              .fill(null)
              .map<Tile>((_, index) => {
                const [x, y] = indexToTileCoord(index);

                return {
                  x,
                  y,
                };
              }),
            visible: containsCoordinates(x, y, DEFAULT_VISIBLE_SCREENS),
          };
        });

      await ScreensRepo.setScreens(screens);
    }

    return screens;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
