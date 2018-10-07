import React from "react";
import "./FavoriteButton.css";

const FavoriteButton = props => {
  return (
    <div>
      <button className="favoriteButton" onClick={() => props.add()}>
        Add to Favorites!
      </button>
    </div>
  );
};

export default FavoriteButton;
