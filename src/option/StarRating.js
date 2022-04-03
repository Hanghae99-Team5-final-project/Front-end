import React from "react";
import ReactStars from "react-rating-stars-component";
function StarRating(props) {
  const ratingChanged = (rating) => {
    alert(`You have given ${rating} star rating for us.`);
    props.changeValue(rating);
  };

  return (
    <>
      <ReactStars size={25} onChange={ratingChanged} />
    </>
  );
}

export default StarRating;
