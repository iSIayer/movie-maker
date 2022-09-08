import PropTypes from 'prop-types';
import { ReviewsListItem, ReviewerTitle } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        return (
          <ReviewsListItem key={review.id}>
            <ReviewerTitle>{review.author}</ReviewerTitle>
            <p>{review.content}</p>
          </ReviewsListItem>
        );
      })}
    </ul>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
