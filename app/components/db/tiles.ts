import { Screen, Tile } from '../../store/slices/screens.slice';
import { db } from './core';

export class TilesRepo {
  static async updateSprite(screen: Screen, activeTile: Tile): Promise<void> {
    const index = screen.tiles.findIndex((tile) => tile.x === activeTile.x && tile.y === activeTile.y);

    await db.screens.update(screen, {
      tiles: [...screen.tiles.slice(0, index), activeTile, ...screen.tiles.slice(index + 1)],
    });
  }
}
