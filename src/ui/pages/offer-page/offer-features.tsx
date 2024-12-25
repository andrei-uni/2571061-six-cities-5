import { OfferType } from '../../../types/offer/offer-type';

type OfferFeaturesProps = {
  bedroomCount: number;
  maxAdults: number;
  offerTtype: OfferType;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function OfferFeatures({ bedroomCount: bedroomsCount, maxAdults, offerTtype: type }: OfferFeaturesProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalize(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedroomsCount} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}
