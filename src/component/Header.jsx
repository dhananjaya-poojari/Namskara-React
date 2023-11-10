import FishLogo from "../../Icons/icons8-fish-100.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img className="logo" src={FishLogo} alt="Food Fire Logo" />
  </Link>
);
//const loggedInUser = () => true;
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">
              <img
                src="https://img.icons8.com/fluency-systems-regular/24/null/home.png"
                alt="Home"
              />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img
                src="https://img.icons8.com/fluency-systems-regular/24/null/about.png"
                alt="About"
              />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <img
                src="https://img.icons8.com/fluency-systems-regular/24/null/contact-card.png"
                alt="Contact"
              />
            </Link>
          </li>
          <li>
            <Link to="/instamart">
            <img src="https://icons8.com/icon/Uz0dKCAVQ1LW/instant" />
            </Link>
          </li>
          {loggedInUser ? (
            <li onClick={() => setLoggedInUser(false)}>logout</li>
          ) : (
            <li onClick={() => setLoggedInUser(true)}>login</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
