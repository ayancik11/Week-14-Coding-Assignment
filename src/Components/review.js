import React from "react";
//components that lists a review
const Review = ({ review }) => {
  return (
    <div>
      <p id="reviews">"{review.review}"</p>
    </div>
  );
};

export default Review;