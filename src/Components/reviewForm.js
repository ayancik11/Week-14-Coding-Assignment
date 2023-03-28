import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ form, reviews, setForm, setReviews }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, form]);
    setForm({ review: "", id: uuidv4() });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie" id="review-label">
          <h6 id="review-header">Leave a review:</h6>
        </label>
        <br></br>
        <textarea
          className="form-control"
          name="review"
          value={form.review}
          onChange={handleChange}
          rows="3"
          placeholder="Type your review here."
        ></textarea>
        <button className="btn btn-primary form-control" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;