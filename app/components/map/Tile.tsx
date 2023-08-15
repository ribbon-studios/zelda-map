import classNames from 'classnames';
import * as styles from './Tile.module.scss';
import { ContextMenu } from '../common/ContextMenu';
import { useRef } from 'react';

export type TileProps = {
  x: number;
  y: number;
  disabled?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Tile({ x, y, disabled }: TileProps) {
  const tileRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <div className={classNames(styles.tile, disabled && styles.disabled)} ref={tileRef} />
      <ContextMenu target={tileRef} />
    </div>
  );
}
