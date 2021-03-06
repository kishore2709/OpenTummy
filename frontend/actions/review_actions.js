import * as REVIEWutil from '../utils/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";



export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const requestAllReviews = rest_id => dispatch => (
  REVIEWutil.fetchAllReviews(rest_id).then(reviews => (
    dispatch(receiveAllReviews(reviews))), err => (dispatch(receiveReviewErrors(err.responseJSON)))
));


export const createReview = review => dispatch => (
  REVIEWutil.createReview(review).then(review => (
    dispatch(receiveReview(review))), err => (dispatch(receiveReviewErrors(err.responseJSON)))
));
