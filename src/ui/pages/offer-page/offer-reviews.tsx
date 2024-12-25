import { OfferComment } from '../../../types/offer/offer-comment';
import { OfferReviewForm } from './offer-review-form';
import { OfferReviewItem } from './offer-review-item';

type OfferReviewsProps = {
  comments: OfferComment[];
}

export function OfferReviews({ comments }: OfferReviewsProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          comments.map((comment) => (
            <OfferReviewItem comment={comment} key={comment.id} />
          ))
        }
      </ul>
      <OfferReviewForm />
    </section>
  );
}
