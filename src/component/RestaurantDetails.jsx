import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, swiggy_restarant_api_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    Find();
  }, []);

  const Find = async () => {
    const response = await fetch(swiggy_restarant_api_URL + id);
    const json = await response.json();
    setRestaurant(json.data.cards[0].card.card.info);
  };

  return restaurant ? (
    <>
      <div className="search-container">
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.areaName}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt={restaurant.name}
        />
        <h4>{restaurant.avgRating}</h4>
      </div>
    </>
  ) : (
    <Shimmer />
  );
};
export default RestaurantDetails;
