import classNames from 'classnames';
import * as styles from './Tile.module.scss';
import { ContextMenu } from '../common/ContextMenu';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectTile, setTile } from '../../store/slices/tile.slice';
import { Sprite } from './Sprite';
import { Sprites } from '../../constants/sprites';
import { useAppDispatch } from '../../store/store';

export type TileProps = {
  x: number;
  y: number;
  disabled?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Tile({ x, y, disabled }: TileProps) {
  const dispatch = useAppDispatch();
  const tile = useSelector(selectTile(x, y));
  const tileRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.container}
      onClick={() => {
        dispatch(
          setTile({
            x,
            y,
            sprite: tile?.sprite === undefined ? Sprites.OCTOROK : undefined,
          })
        );
      }}
    >
      <div className={classNames(styles.tile, disabled && styles.disabled)} ref={tileRef}>
        <Sprite sprite={tile?.sprite} />
      </div>
      <ContextMenu target={tileRef} />
    </div>
  );
}
