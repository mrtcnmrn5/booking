import React from "react";
import "./SearchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        className="siImg"
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/db/d9/c9/levent-otel.jpg?w=700&h=-1&s=1"
        alt=""
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air Conditioning</span>
        <span className="siFeatures">Entire studio | 1 bathroom | 21m2 1 full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
        </span>
      </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  );
};

export default SearchItem;
