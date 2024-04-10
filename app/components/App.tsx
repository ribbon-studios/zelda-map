import { Maps } from '../constants/maps';
import { Map } from './map/Map';
import * as styles from './App.module.scss';
import { useAppDispatch } from '../store/store';
import { Header } from './Header';
import { ForkMe } from '@ribbon-studios/fork-me';
import { FocusedScreen } from './map/FocusedScreen';
import { useEffect } from 'react';
import { initializeScreens } from '../store/thunks/screens.thunks';

export function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeScreens());
  }, []);

  return (
    <>
      <div className={styles.app}>
        <Header />
        <FocusedScreen map={Maps.QUEST1} />
        <Map map={Maps.QUEST1} />
      </div>
      <ForkMe slug="ribbon-studios/zelda-map" backgroundColor="white" color="#272727" />
    </>
  );
}
