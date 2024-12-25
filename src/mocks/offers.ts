import { OfferComment } from '../types/offer/offer-comment';
import { OfferPreview } from '../types/offer/offer-preview';
import { OfferFull } from '../types/offer/offer-full';
import offersJson from './offers.json';
import commentsJson from './comments.json';
import descriptionJson from './description.json';
import favoritesJson from './favorites.json';

export const MOCK_OFFERS = offersJson as OfferPreview[];
export const MOCK_COMMENTS = commentsJson as OfferComment[];
export const MOCK_DESCRIPTION = descriptionJson as OfferFull;
export const MOCK_FAVORITES = favoritesJson as OfferPreview[];
