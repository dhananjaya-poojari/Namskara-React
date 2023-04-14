import React from "react";
import ReactDOM from "react-dom/client";
import FishLogo from "./Icons/icons8-fish-100.png";
import restaurantList from "./data";

const Title = () => (
  <a href="/">
    <img className="logo" src={FishLogo} alt="Food Fire Logo" />
  </a>
);
const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>
          <img
            src="https://img.icons8.com/fluency-systems-regular/24/null/home.png"
            alt="Home"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/fluency-systems-regular/24/null/about.png"
            alt="About"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/fluency-systems-regular/24/null/contact-card.png"
            alt="Contact"
          />
        </li>
        <li>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
    </div>
  </div>
);

const RestuarantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div>
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h3>{cuisines.join()}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    </div>
  );
};

const Body = () => {
  const restaurants = restaurantList();
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestuarantCard {...restaurant?.data} />
      ))}
    </div>
  );
};

const Footer = () => {
  return <div></div>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
