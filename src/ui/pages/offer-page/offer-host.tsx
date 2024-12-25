import { OfferFull } from '../../../types/offer/offer-full.ts';

type OfferHostProps = {
  offerFull: OfferFull;
}

export function OfferHost({ offerFull }: OfferHostProps) {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${offerFull.host.isPro && 'offer__avatar-wrapper--pro'} user__avatar-wrapper`}>
          <img
            className="offer__avatar user__avatar"
            src={offerFull.host.avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{offerFull.host.name}</span>
        {
          offerFull.host.isPro &&
          <span className="offer__user-status">Pro</span>
        }
      </div>
      <div className="offer__description">
        <p className="offer__text">
          {offerFull.description}
        </p>
      </div>
    </div>
  );
}
