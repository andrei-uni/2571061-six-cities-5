type OfferInsideProps = {
  items: string[];
}

export function OfferInside({ items }: OfferInsideProps) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {
          items.map((item) => (
            <li className="offer__inside-item" key={item}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
