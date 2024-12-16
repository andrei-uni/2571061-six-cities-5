import ReactDOM from 'react-dom/client';
import { App } from './ui/components/app';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardsCount={5} />
  </React.StrictMode>
);
