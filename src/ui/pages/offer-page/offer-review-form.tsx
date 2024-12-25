import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { RATING_VALUES } from '../../../consts';

export function OfferReviewForm() {
  const [formData, setFormData] = useState({ rating: 0, review: '' });

  function onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

  function isSubmitDisabled(): boolean {
    return formData.rating === 0 || formData.review.length === 0;
  }

  function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          RATING_VALUES.map((value) => (
            <Fragment key={value[0]}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value[0]}
                id={`${value[0]}-stars`}
                type="radio"
                onChange={onChange}
              />
              <label
                htmlFor={`${value[0]}-stars`}
                className="reviews__rating-label form__rating-label"
                title={value[1]}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={onChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled()}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
