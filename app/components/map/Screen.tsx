import classNames from 'classnames';
import * as styles from './Screen.module.scss';
import { useAppDispatch } from '../../store/store';
import { Screen, toggleScreenVisibility } from '../../store/slices/screens.slice';
import { FaLock } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { isAnyScreenLocked, isScreenLocked, setActiveScreen, toggleScreenLock } from '../../store/slices/screen.slice';

export type ScreenProps = {
  screen: Screen;
};

export function Screen({ screen }: ScreenProps) {
  const dispatch = useAppDispatch();
  const anyScreenLocked = useSelector(isAnyScreenLocked);
  const screenLocked = useSelector(isScreenLocked(screen));

  return (
    <div
      className={classNames(styles.screen, screen.visible && styles.visible, screenLocked && styles.locked)}
      onClick={() => {
        if (!screen.visible) return;

        dispatch(toggleScreenLock(screen));
      }}
      onContextMenu={(event) => {
        event.preventDefault();

        if (screenLocked) return;

        dispatch(toggleScreenVisibility(screen));
      }}
      onMouseOver={() => {
        if (!screen.visible || anyScreenLocked) return;

        dispatch(setActiveScreen(screen));
      }}
    >
      <div className={styles.lockOverlay}>
        <FaLock className={styles.lock} />
      </div>
      {!screen.visible && (
        <div className={styles.coords}>
          {screen.x}, {screen.y}
        </div>
      )}
    </div>
  );
}
