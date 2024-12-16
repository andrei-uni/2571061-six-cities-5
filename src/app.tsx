import React from 'react';
import { MainPage } from './ui/pages/main_page/main_page';

export function App(props: { cardsCount: number }) {
  return (
    <React.StrictMode>
      <MainPage cardsCount={props.cardsCount} />
    </React.StrictMode>
  );
}
