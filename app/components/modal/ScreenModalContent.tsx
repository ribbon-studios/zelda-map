import * as styles from './ScreenModalContent.module.scss';
import { MAP_IMAGES, Maps } from '../../constants/maps';
import { useReadOnlyCachedState } from '@rain-cafe/react-utils';
import { Tile } from '../map/Tile';
import { selectScreen } from '../../store/slices/screen.slice';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

export type ScreenModalContentProps = {
  map: Maps;
};

export const SCREEN_WIDTH = 256;
export const SCREEN_HEIGHT = 176;

export const TILE_WIDTH = 16;
export const TILE_HEIGHT = 11;

export function ScreenModalContent({ map }: ScreenModalContentProps) {
  const screen = useSelector(selectScreen);
  const image = useReadOnlyCachedState(() => MAP_IMAGES[map], [map]);
  const computedStyles = useReadOnlyCachedState<React.CSSProperties | undefined>(() => {
    if (!screen) return undefined;

    return {
      backgroundImage: `url(${image})`,
      backgroundPositionX: `${screen.x * -SCREEN_WIDTH}px`,
      backgroundPositionY: `${screen.y * -SCREEN_HEIGHT}px`,
    };
  }, [image, screen]);

  const tiles = useReadOnlyCachedState(() => {
    return Array(TILE_WIDTH * TILE_HEIGHT)
      .fill(null)
      .map((_, index) => {
        const x = index % TILE_WIDTH;
        const y = Math.floor(index / TILE_HEIGHT);

        return <Tile key={index} x={x} y={Math.floor(y)} disabled={!screen} />;
      });
  }, []);

  return (
    <div className={classNames(styles.slider, screen && styles.visible)}>
      <div className={styles.screen} style={computedStyles}>
        {tiles}
      </div>
    </div>
  );
}
