import React from "react";
import Review from "./review";
import "../App.css";
//component which shows all the reviews for the movie
const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <li key={index}>
          <Review review={review} />
        </li>
      ))}
    </div>
  );
};

export default ReviewList;