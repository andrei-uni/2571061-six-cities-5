import { OfferPreview } from '../../../types/offer/offer-preview';
import { OfferInfo } from '../../components/offer-card/offer-info';
import { PremiumLabel } from '../../components/offer-card/premium-label';

type FavoriteOfferCardProps = {
  offerPreview: OfferPreview;
}

export function FavoriteOfferCard({ offerPreview }: FavoriteOfferCardProps) {
  return (
    <article className="favorites__card place-card">
      <PremiumLabel isPremium={offerPreview.isPremium} />
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image"
            src={offerPreview.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <OfferInfo offerPreview={offerPreview} />
      </div>
    </article>
  );
}
