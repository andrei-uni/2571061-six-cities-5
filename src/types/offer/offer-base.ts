import { Location } from '../location';
import { OfferType } from './offer-type';

export type OfferBase = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}
