import * as styles from './Overlay.module.scss';
import { Screen } from './Screen';
import { useSelector } from 'react-redux';
import { selectScreens } from '../../store/slices/screens.slice';

export function Overlay() {
  const screens = useSelector(selectScreens);

  return (
    <div className={styles.overlay}>
      {screens.map((screen, index) => (
        <Screen key={index} screen={screen} />
      ))}
    </div>
  );
}
