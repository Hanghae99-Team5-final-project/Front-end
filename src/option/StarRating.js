import React from "react";
import ReactStars from "react-rating-stars-component";
function StarRating(props) {
  const ratingChanged = (rating) => {
    alert(` ${rating}점`);
    props.changeValue(rating);
  };

  return (
    <>
      <ReactStars size={40} onChange={ratingChanged} />
    </>
  );
}

export default StarRating;
