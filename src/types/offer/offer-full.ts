import { User } from '../user';
import { OfferBase } from './offer-base';

export type OfferFull = OfferBase & {
  description: string;
  bedrooms: number;
  goods: [string];
  host: User;
  images: [string];
  maxAdults: number;
}
