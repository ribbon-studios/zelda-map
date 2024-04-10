import { Ribbon } from '@ribbon-studios/ribbon';
import { Typography } from './common/Typography';
import * as styles from './Header.module.scss';
import { banner } from '../config';

export function Header() {
  return (
    <div className={styles.header}>
      {banner && (
        <Ribbon backgroundColor={banner.backgroundColor} color={banner.color} position="top-left">
          {banner.label}
        </Ribbon>
      )}
      <Typography type="h1">Zelda Map Tool</Typography>
      <p>A tool to help you track all your discoveries on your adventure!</p>
      <p>Hover over a screen and click it to lock it in place!</p>
      <p>Right clicking a screen will reveal / hide it.</p>
    </div>
  );
}
