import { useReadOnlyCachedState } from '@rain-cafe/react-utils';
import { SPRITES_TO_SHEET, SPRITE_TO_COORD_MAP, Sprites } from '../../constants/sprites';
import styles from './Sprite.module.scss';

export type SpriteProps = {
  sprite?: Sprites;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Sprite({ sprite }: SpriteProps) {
  const [sheet, x, y] = useReadOnlyCachedState(() => {
    if (sprite === undefined) return [];

    return [SPRITES_TO_SHEET[sprite], ...SPRITE_TO_COORD_MAP[sprite]];
  }, [sprite]);

  return (
    <div
      className={styles.sprite}
      style={{ backgroundImage: `url(${sheet})`, backgroundPositionX: x, backgroundPositionY: y }}
    />
  );
}
