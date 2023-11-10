import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../../utils/useRestaurant";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

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
