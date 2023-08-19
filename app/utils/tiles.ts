import { Tiles } from '../constants/map';

export function tileCoordToIndex(x: number, y: number): number {
  return x + y * Tiles.COLUMNS;
}

export function indexToTileCoord(index: number): [number, number] {
  return [index % Tiles.COLUMNS, Math.floor(index / Tiles.COLUMNS)];
}
