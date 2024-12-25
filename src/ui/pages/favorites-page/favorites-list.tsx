import { OfferPreview } from '../../../types/offer/offer-preview';
import { FavoriteOfferCard } from './favorite-offer-card';

type FavoritesListProps = {
  offerPreviews: OfferPreview[];
}

function groupOffersByCity(offers: OfferPreview[]): Map<string, OfferPreview[]> {
  const groupedByCity = new Map<string, OfferPreview[]>();

  offers.forEach((offer) => {
    const cityName = offer.city.name;
    if (!groupedByCity.has(cityName)) {
      groupedByCity.set(cityName, []);
    }
    groupedByCity.get(cityName)!.push(offer);
  });

  return groupedByCity;
}

export function FavoritesList({ offerPreviews }: FavoritesListProps) {
  const groupedByCity = groupOffersByCity(offerPreviews);

  return (
    <ul className="favorites__list">
      {
        [...groupedByCity.entries()].map(([city, groupedOffers]) =>
          (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {groupedOffers.map((offer) => (
                  <FavoriteOfferCard key={offer.id} offerPreview={offer} />
                ))}
              </div>
            </li>
          )
        )
      }
    </ul>
  );
}
