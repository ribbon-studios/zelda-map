import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import dedent from 'dedent';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);

const sha = process.env.GITHUB_SHA || 'main';
if (sha) {
  console.log(dedent`
    Version: ${sha}
    URL: https://github.com/ribbon-studios/zelda-map/tree/${sha}
  `);
}
