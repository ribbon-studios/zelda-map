import { Screens } from '../constants/map';

export function containsCoordinates(x: number, y: number, coordPairs: string[]): boolean {
  return coordPairs.includes(`${x},${y}`);
}

export function explodeCoord(coord: string): string[] {
  const [min, max] = coord.split('-').map(Number);

  if (isNaN(max)) return [String(min)];

  return Array(max + 1 - min)
    .fill(null)
    .map((_, index) => String(index + min));
}

export function explodeCoordPair(rawCoords: string): string[] {
  const [xCoords, yCoords] = rawCoords.split(',').map(explodeCoord);

  const coords: string[] = [];

  for (const xCoord of xCoords) {
    for (const yCoord of yCoords) {
      coords.push(`${xCoord},${yCoord}`);
    }
  }

  return coords;
}

export function explodeCoordPairs(...rawCoordPairs: string[]): string[] {
  return rawCoordPairs.reduce<string[]>((coordPairs, coordPair) => {
    if (coordPair.includes('-')) {
      return coordPairs.concat(explodeCoordPair(coordPair));
    } else {
      coordPairs.push(coordPair);
    }

    return coordPairs;
  }, []);
}

export function screenCoordToIndex(x: number, y: number): number {
  return x + y * Screens.COLUMNS;
}

export function indexToScreenCoord(index: number): [number, number] {
  return [index % Screens.COLUMNS, Math.floor(index / Screens.COLUMNS)];
}
