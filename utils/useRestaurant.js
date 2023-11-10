import { useEffect, useState } from "react";
import {  swiggy_restarant_api_URL } from "../src/constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    Find();
  }, []);

  const Find = async () => {
    const response = await fetch(swiggy_restarant_api_URL + resId);
    const json = await response.json();
    setRestaurant(json.data.cards[0].card.card.info);
  };
  return restaurant;
};

export default useRestaurant;
