import { MainPage } from '../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/login-page/login-page';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { FavoritesPage } from '../pages/favorites-page/favorites-page';
import { OfferPage } from '../pages/offer-page/offer-page';
import { AppRoutes } from '../../app-routes';
import { PrivateRoute } from './private-route';
import { AuthorizationStatus } from '../../types/authorization-status';
import { OfferPreview } from '../../types/offer/offer-preview';
import { OfferComment } from '../../types/offer/offer-comment';
import { OfferFull } from '../../types/offer/offer-full';

type AppProps = {
  offers: OfferPreview[];
  favorires: OfferPreview[];
  offerDescription: OfferFull;
  nearOffers: OfferPreview[];
  comments: OfferComment[];
}

export function App({ offers, favorires, offerDescription, nearOffers, comments }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<MainPage offerPreviews={offers} />}
        />
        <Route
          path={AppRoutes.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage offerPreviews={favorires} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Offer}
          element={<OfferPage offerFull={offerDescription} nearOffers={nearOffers} comments={comments} />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
