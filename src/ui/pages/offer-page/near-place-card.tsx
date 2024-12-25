import { Link } from 'react-router-dom';
import { OfferPreview } from '../../../types/offer/offer-preview';
import { OfferInfo } from '../../components/offer-card/offer-info';
import { PremiumLabel } from '../../components/offer-card/premium-label';
import { createOfferRoute } from '../../../app-routes';

type NearPlaceCardProps = {
  offerPreview: OfferPreview;
}

export function NearPlaceCard({ offerPreview }: NearPlaceCardProps) {
  return (
    <article className="near-places__card place-card">
      <PremiumLabel isPremium={offerPreview.isPremium} />
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={createOfferRoute(offerPreview.id)}>
          <img className="place-card__image"
            src={offerPreview.previewImage}
            width="260" height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <OfferInfo offerPreview={offerPreview} />
    </article>
  );
}
