import * as styles from './FocusedScreen.module.scss';
import { MAP_IMAGES, Maps } from '../../constants/maps';
import { useReadOnlyCachedState } from '@rain-cafe/react-utils';
import { Tile } from './Tile';
import { selectActiveScreen } from '../../store/slices/screen.slice';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { selectScreen } from '../../store/slices/screens.slice';

export type FocusedScreenProps = {
  map: Maps;
};

export const SCREEN_WIDTH = 256;
export const SCREEN_HEIGHT = 176;

export const TILE_WIDTH = 16;
export const TILE_HEIGHT = 11;

export function FocusedScreen({ map }: FocusedScreenProps) {
  const activeScreen = useSelector(selectActiveScreen);
  const screen = useSelector(selectScreen(activeScreen.x, activeScreen.y));
  const image = useReadOnlyCachedState(() => MAP_IMAGES[map], [map]);
  const computedStyles = useReadOnlyCachedState<React.CSSProperties | undefined>(() => {
    if (!screen) return undefined;

    return {
      backgroundImage: `url(${image})`,
      backgroundPositionX: `${screen.x * -SCREEN_WIDTH}px`,
      backgroundPositionY: `${screen.y * -SCREEN_HEIGHT}px`,
    };
  }, [image, screen]);

  if (!screen) return null;

  return (
    <div className={classNames(styles.slider, screen && styles.visible)}>
      <div className={styles.screen} style={computedStyles}>
        {screen.tiles.map((tile, index) => (
          <Tile key={index} screen={activeScreen} tile={tile} />
        ))}
      </div>
    </div>
  );
}
