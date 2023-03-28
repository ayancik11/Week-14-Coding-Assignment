import React, { useState } from "react";
import Form from "./reviewForm";
import { v4 as uuidv4 } from "uuid";
import ReviewList from "./reviewList";
import Stars from "./stars";
//using props and state to make the movie list with all the information as well as a review form
export const Movie = (props) => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ review: "", id: uuidv4() });
  return (
    <div className="col-12 col-lg-6 col-xl-4">
      <div className="card bg-dark text-light mb-3" id="movie-card">
        <div className="card-header">
          <img src={props.movie.image} alt="" />
        </div>
        <div className="card-text">
          <h2 className="card-title" id="name">
            {props.movie.name} {props.movie.date}
          </h2>
          <button className="btn btn-light btn-sm" id="genre">
            {props.movie.genre}
          </button>
          <p id="synopsis">
            {props.movie.synopsis}
            <br></br>
          </p>
        </div>
        <div className="card-body">
          <h5>Rate this movie!</h5>
          <Stars />
          <br></br>
          <Form
            form={form}
            reviews={reviews}
            setForm={setForm}
            setReviews={setReviews}
          />
        </div>
        <div
          className="card-footer bg-light text-dark rounded"
          id="reviews-card"
        >
          <h5 className="card-title" id="review-name">
            Reviews for {props.movie.name}:
          </h5>
          <span id="review-list">
            <ReviewList reviews={reviews} />
            {props.movie.reviews}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Movie;