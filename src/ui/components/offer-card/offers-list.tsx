import { OfferCard } from './offer-card';
import { OfferPreview } from '../../../types/offer/offer-preview';

type OffersListProps = {
  offerPreviews: OfferPreview[];
}

export function OffersList({ offerPreviews }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offerPreviews.map((offer) => <OfferCard key={offer.id} offerPreview={offer} />)
      }
    </div>
  );
}
