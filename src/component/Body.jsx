import { swiggy_api_URL, restaurantList } from "../constants";
import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchTxt, setSearchText] = useState("");
  const data = restaurantList();
  useEffect(() => {
    getAllRestaurant();
  }, []);

  async function getAllRestaurant() {
    setRestaurants(data);
    setFilteredRestaurant(data);
  }
  const filterRestaurant = async () => {
    const res = restaurants.filter(
      (x) => !searchTxt || x.data.name.includes(searchTxt)
    );
    setFilteredRestaurant(res);
  };
  if (restaurants.length === 0) return <Shimmer />;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="btn"
          onClick={() => {
            filterRestaurant();
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurant.length !== 0 ? (
          filteredRestaurant.map((restaurant) => (
            <RestuarantCard {...restaurant?.data} key={restaurant?.data.id} />
          ))
        ) : (
          <h1>No restaurant match found</h1>
        )}
      </div>
    </>
  );
};
export default Body;
