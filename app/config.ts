export enum Environment {
  LOCAL,
  LIVE,
}

export const ENVIRONMENT_DOMAIN_MAP: Record<string, Environment> = {
  'zelda.ribbonstudios.com': Environment.LIVE,
};

export type Banner = {
  label: string;
  backgroundColor: string;
  color?: string;
};

export const BANNERS: Record<Environment, Banner | null> = {
  [Environment.LOCAL]: {
    label: 'local',
    backgroundColor: '#66BB6A',
  },
  [Environment.LIVE]: null,
};

export const environment = ENVIRONMENT_DOMAIN_MAP[location.hostname] || Environment.LOCAL;
export const banner = BANNERS[environment];
