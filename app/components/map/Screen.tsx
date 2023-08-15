import classNames from 'classnames';
import * as styles from './Screen.module.scss';
import { useCachedState } from '@rain-cafe/react-utils';
import { useAppDispatch } from '../../store/store';
import { setScreen } from '../../store/slices/screen.slice';

export type ScreenProps = {
  x: number;
  y: number;
  visible: boolean;
};

export const TILE_WIDTH = 16;
export const TILE_HEIGHT = 11;

export function Screen({ x, y, visible: externallyVisible }: ScreenProps) {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useCachedState(() => externallyVisible, [externallyVisible]);

  return (
    <div
      className={classNames(styles.screen, visible && styles.visible)}
      onDoubleClick={() => setVisible(!visible)}
      onMouseOver={() => {
        if (!visible) return;

        dispatch(
          setScreen({
            x,
            y,
          })
        );
      }}
      // onMouseLeave={() => dispatch(setScreen(null))}
    >
      {!visible && (
        <div className={styles.coords}>
          {x}, {y}
        </div>
      )}
    </div>
  );
}
