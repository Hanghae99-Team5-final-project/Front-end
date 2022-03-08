import React from "react";
import ReactStars from "react-rating-stars-component";
function StarRating() {
  const ratingChanged = (rating) => {
    alert(`You have given ${rating} star rating for us.`);
  };

  return (
    <>
      <ReactStars size={45} isHalf={true} onChange={ratingChanged} />
    </>
  );
}

export default StarRating;
