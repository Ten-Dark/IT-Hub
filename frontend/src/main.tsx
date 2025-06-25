import './index.css';
import { App } from './app/App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
