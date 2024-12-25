import { Link } from 'react-router-dom';
import { RatingBar } from './rating-bar';
import { OfferPreview } from '../../../types/offer/offer-preview';
import { createOfferRoute } from '../../../app-routes';

type OfferInfoProps = {
  offerPreview: OfferPreview;
}

export function OfferInfo({ offerPreview }: OfferInfoProps) {
  const offerRoute = createOfferRoute(offerPreview.id);

  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offerPreview.price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button
          className="place-card__bookmark-button button"
          type="button"
        >
          <svg
            className="place-card__bookmark-icon"
            width={18}
            height={19}
          >
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <RatingBar rating={offerPreview.rating} />
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={offerRoute}>{offerPreview.title}</Link>
      </h2>
      <p className="place-card__type">{offerPreview.type}</p>
    </>
  );
}
