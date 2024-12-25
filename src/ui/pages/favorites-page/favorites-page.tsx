import { OfferPreview } from '../../../types/offer/offer-preview';
import { Header } from '../../components/header';
import { FavoritesList } from './favorites-list';

type FavoritesPageProps = {
  offerPreviews: OfferPreview[];
}

export function FavoritesPage({ offerPreviews }: FavoritesPageProps) {
  return (
    <div className="page">
      <Header showCities />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offerPreviews={offerPreviews} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}
