import Dexie, { type EntityTable } from 'dexie';
import type { Screen } from '../../store/slices/screens.slice';

export const db = new Dexie('zelda-map') as Dexie & {
  screens: EntityTable<Screen>;
};

db.version(1).stores({
  screens: '[y+x], x',
});
