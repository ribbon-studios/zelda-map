import { db } from './core';
import type { Screen } from '../../store/slices/screens.slice';

export class ScreensRepo {
  static async getScreens(): Promise<Screen[]> {
    const screens = await db.screens.orderBy('x').toArray();

    return screens.sort((a, b) => a.y - b.y);
  }

  static async setScreens(screens: Screen[]): Promise<void> {
    await db.screens.bulkAdd(screens);
  }

  static async updateVisible(screen: Screen): Promise<void> {
    await db.screens.update(screen, {
      visible: screen.visible,
    });
  }
}
