import classNames from 'classnames';
import * as styles from './Screen.module.scss';
import { useCachedState } from '@rain-cafe/react-utils';
import { useAppDispatch } from '../../store/store';
import { isAnyScreenLocked, isScreenLocked, setScreen, toggleScreenLock } from '../../store/slices/screen.slice';
import { useSelector } from 'react-redux';
import { FaLock } from 'react-icons/fa';

export type ScreenProps = {
  x: number;
  y: number;
  visible: boolean;
};

export const TILE_WIDTH = 16;
export const TILE_HEIGHT = 11;

export function Screen({ x, y, visible: externallyVisible }: ScreenProps) {
  const dispatch = useAppDispatch();
  const anyScreenLocked = useSelector(isAnyScreenLocked);
  const screenLocked = useSelector(isScreenLocked(x, y));
  const [visible, setVisible] = useCachedState(() => externallyVisible, [externallyVisible]);

  return (
    <div
      className={classNames(styles.screen, visible && styles.visible, screenLocked && styles.locked)}
      onClick={() =>
        dispatch(
          toggleScreenLock({
            x,
            y,
          })
        )
      }
      onContextMenu={(event) => {
        event.preventDefault();

        if (screenLocked) return;

        setVisible(!visible);
      }}
      onMouseOver={() => {
        if (!visible || anyScreenLocked) return;

        dispatch(
          setScreen({
            x,
            y,
          })
        );
      }}
    >
      <div className={styles.lockOverlay}>
        <FaLock className={styles.lock} />
      </div>
      {!visible && (
        <div className={styles.coords}>
          {x}, {y}
        </div>
      )}
    </div>
  );
}
