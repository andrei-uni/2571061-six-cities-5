import { User } from '../user';

export type OfferComment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: User;
}
