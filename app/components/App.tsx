import { Maps } from '../constants/maps';
import { Map } from './map/Map';
import * as styles from './App.module.scss';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ScreenModalContent } from './modal/ScreenModalContent';
import { Header } from './Header';

export function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Header />
        <ScreenModalContent map={Maps.QUEST1} />
        <Map map={Maps.QUEST1} />
      </div>
    </Provider>
  );
}
