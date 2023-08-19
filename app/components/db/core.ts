import Dexie, { Table } from 'dexie';
import { Screen } from '../../store/slices/screens.slice';

export class Zexie extends Dexie {
  screens!: Table<Screen>;

  constructor() {
    super('zelda-map');

    this.version(1).stores({
      screens: '[y+x], x',
    });
  }
}

export const db = new Zexie();
