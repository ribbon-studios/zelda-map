import { Maps } from '../constants/maps';
import { Map } from './map/Map';
import * as styles from './App.module.scss';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ScreenModalContent } from './modal/ScreenModalContent';
import { Header } from './Header';
import { ForkMe } from '@rain-cafe/fork-me';

export function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Header />
        <ScreenModalContent map={Maps.QUEST1} />
        <Map map={Maps.QUEST1} />
      </div>
      <ForkMe slug="rain-cafe/zelda-map" backgroundColor="white" color="#272727" />
    </Provider>
  );
}
