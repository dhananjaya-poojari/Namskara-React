import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    Find();
  }, []);
  const Find = async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        id
    );
    const json = await response.json();
    console.log(json);
  };
  return (
    <>
      <div className="search-container">
        <h1>Restaurant Name {id}</h1>
      </div>
    </>
  );
};
export default RestaurantDetails;
