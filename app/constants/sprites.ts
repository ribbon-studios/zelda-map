import enemies from '../../assets/sprites/enemies.png';

export enum Sprites {
  OCTOROK,
  MOBLIN,
  LEEVER,
  LYNEL,
  TEKTITE,
  PEAHAT,
  ARMOS,
  GHINI,
  ZORA,
}

export const SPRITES_TO_SHEET: Record<Sprites, string> = {
  [Sprites.OCTOROK]: enemies,
  [Sprites.MOBLIN]: enemies,
  [Sprites.LEEVER]: enemies,
  [Sprites.LYNEL]: enemies,
  [Sprites.TEKTITE]: enemies,
  [Sprites.PEAHAT]: enemies,
  [Sprites.ARMOS]: enemies,
  [Sprites.GHINI]: enemies,
  [Sprites.ZORA]: enemies,
};

export const SPRITE_TO_COORD_MAP: Record<Sprites, [number, number]> = {
  [Sprites.OCTOROK]: [0, 0],
  [Sprites.MOBLIN]: [1, 0],
  [Sprites.LEEVER]: [2, 0],
  [Sprites.LYNEL]: [3, 0],
  [Sprites.TEKTITE]: [4, 0],
  [Sprites.PEAHAT]: [5, 0],
  [Sprites.ARMOS]: [6, 0],
  [Sprites.GHINI]: [7, 0],
  [Sprites.ZORA]: [8, 0],
};
