type RatingBarProps = {
  rating: number;
}

function ratingToPercent(rating: number): number {
  const maxRating = 5.0;
  return rating / maxRating * 100;
}

export function RatingBar({ rating }: RatingBarProps) {
  return (
    <>
      <span style={{ width: `${ratingToPercent(rating)}%` }} />
      <span className="visually-hidden">Rating</span>
    </>
  );
}
