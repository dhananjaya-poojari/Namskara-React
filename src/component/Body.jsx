import { swiggy_api_URL, restaurantList } from "../constants";
import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

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

  const online = useOnline();
  if (!online) return <h1 style={{ margin: "100px" }}>You're offiline</h1>;

  if (restaurants.length === 0) return <Shimmer />;

  return (
    <>
      <div className="search-container p-5 bg-pink-50 my-2">
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
          className="btn p-2 m-2 bg-purple-500 text-white rounded-lg hover:bg-black"
          onClick={() => {
            filterRestaurant();
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.length !== 0 ? (
          filteredRestaurant.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant?.data.id}
            >
              <RestuarantCard {...restaurant?.data} />
            </Link>
          ))
        ) : (
          <h1>No restaurant match found</h1>
        )}
      </div>
    </>
  );
};
export default Body;
