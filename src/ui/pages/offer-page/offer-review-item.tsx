import { OfferComment } from '../../../types/offer/offer-comment';
import { RatingBar } from '../../components/offer-card/rating-bar';

type OfferReviewItemProps = {
  comment: OfferComment;
}

function formatToMonthYear(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
}

export function OfferReviewItem({ comment }: OfferReviewItemProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <RatingBar rating={comment.rating} />
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>\
          {formatToMonthYear(comment.date)}
        </time>
      </div>
    </li>
  );
}
