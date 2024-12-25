import { Link } from 'react-router-dom';
import { createOfferRoute } from '../../../app-routes';
import { OfferPreview } from '../../../types/offer/offer-preview';
import { OfferInfo } from './offer-info';
import { PremiumLabel } from './premium-label';

type OfferCardProps = {
  offerPreview: OfferPreview;
}

export function OfferCard({ offerPreview }: OfferCardProps) {
  return (
    <article className="cities__card place-card">
      <PremiumLabel isPremium={offerPreview.isPremium} />
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={createOfferRoute(offerPreview.id)}>
          <img className="place-card__image"
            src={offerPreview.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <OfferInfo offerPreview={offerPreview} />
      </div>
    </article>
  );
}
