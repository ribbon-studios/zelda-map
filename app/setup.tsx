import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);

console.log(`You're currently running v${process.env.GITHUB_SHA || 'local'}!`);
