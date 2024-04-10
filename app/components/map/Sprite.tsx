import { SPRITES_TO_SHEET, SPRITE_TO_COORD_MAP, Sprites } from '../../constants/sprites';
import styles from './Sprite.module.scss';
import { useMemo } from 'react';

export type SpriteProps = {
  sprite?: Sprites;
};

export function Sprite({ sprite }: SpriteProps) {
  const [sheet, x, y] = useMemo(() => {
    if (sprite === undefined) return [];

    return [SPRITES_TO_SHEET[sprite], ...SPRITE_TO_COORD_MAP[sprite]];
  }, [sprite]);

  if (sprite === undefined) return null;

  return (
    <div
      className={styles.sprite}
      style={{ backgroundImage: `url(${sheet})`, backgroundPositionX: x, backgroundPositionY: y }}
    />
  );
}
