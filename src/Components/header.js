import React from "react";
//created a simple header to the mvoie app
export default class Header extends React.Component {
  render() {
    return (
      <div className="card bg-dark text-light container-fluid">
        <h1 className="title">Movie Reviews</h1>
        <p className="text">
          Have You Watched These Movies?
          <br></br>
          Rate and Review These Movies!
        </p>
      </div>
    );
  }
}