import ReactDOM from 'react-dom/client';
import { App } from './ui/components/app';
import React from 'react';
import { MOCK_COMMENTS, MOCK_DESCRIPTION, MOCK_FAVORITES, MOCK_OFFERS } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={MOCK_OFFERS} comments={MOCK_COMMENTS} nearOffers={MOCK_OFFERS} offerDescription={MOCK_DESCRIPTION} favorires={MOCK_FAVORITES} />
  </React.StrictMode>
);
