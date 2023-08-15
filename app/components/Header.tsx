import { Typography } from './common/Typography';
import * as styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <Typography type="h1">Zelda Map Tool</Typography>
      <p>
        A simple tool to help you fill out your own map for <i>The Legend of Zelda</i>
      </p>
      <p>Left-click a screen to enlarge and edit it.</p>
      <p>
        Right-click a screen to reveal or hide it. Screens not included in the map in the manual are hidden
        automatically.
      </p>
    </div>
  );
}
