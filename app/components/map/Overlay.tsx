import { useReadOnlyCachedState } from '@rain-cafe/react-utils';
import * as styles from './Overlay.module.scss';
import { Screen } from './Screen';
import { ReactNode } from 'react';
import { containsCoordinates, explodeCoordPairs } from '../../utils/screens';

export const SCREEN_WIDTH = 16;
export const SCREEN_HEIGHT = 8;

export const DEFAULT_VISIBLE_SCREENS = explodeCoordPairs(
  '6-10,0',
  '5-11,1',
  '3-12,2',
  '2-14,3',
  '2-15,4',
  '1-15,5',
  '0-15,6-7'
);

export function Overlay() {
  const screens: ReactNode[] = useReadOnlyCachedState(() => {
    return Array(SCREEN_WIDTH * SCREEN_HEIGHT)
      .fill(null)
      .map((_, index) => {
        const x = index % SCREEN_WIDTH;
        const y = Math.floor(index / SCREEN_WIDTH);
        return (
          <Screen key={index} x={x} y={Math.floor(y)} visible={containsCoordinates(x, y, DEFAULT_VISIBLE_SCREENS)} />
        );
      });
  }, []);

  return <div className={styles.overlay}>{screens}</div>;
}
