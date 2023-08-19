import classNames from 'classnames';
import * as styles from './Tile.module.scss';
import { ContextMenu } from '../common/ContextMenu';
import { useRef } from 'react';
import { Sprite } from './Sprite';
import { Tile, updateTileSprite } from '../../store/slices/screens.slice';
import { ActiveScreen } from '../../store/slices/screen.slice';
import { useAppDispatch } from '../../store/store';

export type TileProps = {
  screen: ActiveScreen;
  tile: Tile;
  disabled?: boolean;
};

export function Tile({ screen, tile, disabled }: TileProps) {
  const dispatch = useAppDispatch();
  const tileRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.container}
      onClick={() => {
        dispatch(updateTileSprite([screen, tile]));
      }}
    >
      <div className={classNames(styles.tile, disabled && styles.disabled)} ref={tileRef}>
        <Sprite sprite={tile?.sprite} />
      </div>
      <ContextMenu target={tileRef} />
    </div>
  );
}
