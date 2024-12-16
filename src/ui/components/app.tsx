import { MainPage } from '../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/login-page/login-page';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { FavoritesPage } from '../pages/favorites-page/favorites-page';
import { OfferPage } from '../pages/offer-page/offer-page';
import { AppRoutes } from '../../app-routes';
import { PrivateRoute } from './private-route';
import { AuthorizationStatus } from '../../types/authorization-status';

export function App(props: { cardsCount: number }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<MainPage cardsCount={props.cardsCount} />}
        />
        <Route
          path={AppRoutes.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Offer}
          element={<OfferPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
