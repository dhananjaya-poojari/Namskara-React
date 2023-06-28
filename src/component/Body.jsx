import { restaurantList } from "../constants";
import RestuarantCard from "./RestuarantCard";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList());
  const [searchTxt, setSearchText] = useState("");
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
            const res = restaurantList().filter(
              (x) => !searchTxt || x.data.name.includes(searchTxt)
            );
            setRestaurants(res);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestuarantCard {...restaurant?.data} key={restaurant?.data.id} />
        ))}
      </div>
    </>
  );
};
export default Body;
