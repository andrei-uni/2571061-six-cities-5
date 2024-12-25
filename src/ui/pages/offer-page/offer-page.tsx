import { OfferComment } from '../../../types/offer/offer-comment';
import { OfferFull } from '../../../types/offer/offer-full';
import { OfferPreview } from '../../../types/offer/offer-preview';
import { Header } from '../../components/header';
import { RatingBar } from '../../components/offer-card/rating-bar';
import { NearPlaceCard } from './near-place-card';
import { OfferFeatures } from './offer-features';
import { OfferHost } from './offer-host';
import { OfferInside } from './offer-inside';
import { OfferPrice } from './offer-price';
import { OfferReviews } from './offer-reviews';

type OfferPageProps = {
  offerFull: OfferFull;
  nearOffers: OfferPreview[];
  comments: OfferComment[];
}

export function OfferPage({ offerFull, nearOffers, comments }: OfferPageProps) {
  return (
    <div className="page">
      <Header showCities />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                offerFull.images.map((image) => (
                  <div className="offer__image-wrapper" key={image} >
                    <img
                      className="offer__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                offerFull.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerFull.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <RatingBar rating={offerFull.rating} />
                </div>
                <span className="offer__rating-value rating__value">{offerFull.rating}</span>
              </div>
              <OfferFeatures bedroomCount={offerFull.bedrooms} maxAdults={offerFull.maxAdults} offerTtype={offerFull.type} />
              <OfferPrice price={offerFull.price} />
              <OfferInside items={offerFull.goods} />
              <OfferHost offerFull={offerFull} />
              <OfferReviews comments={comments} />
            </div>
          </div>
          <section className="offer__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {
                nearOffers.map((nearOffer) => (
                  <NearPlaceCard offerPreview={nearOffer} key={nearOffer.id} />
                ))
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
