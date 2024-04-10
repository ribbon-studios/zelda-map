import { MAP_IMAGES, Maps } from '../../constants/maps';
import * as styles from './Map.module.scss';
import { Overlay } from './Overlay';
import { useMemo } from 'react';

export type MapProps = {
  map: Maps;
};

export const SCALE = 3;

export function Map({ map }: MapProps) {
  const image = useMemo(() => MAP_IMAGES[map], [map]);

  return (
    <div className={styles.map}>
      <img alt="map" src={image} />

      <Overlay />
    </div>
  );
}
