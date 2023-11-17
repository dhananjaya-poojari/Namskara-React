import FishLogo from "../../Icons/icons8-fish-100.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img className="h-28 pl-2" src={FishLogo} alt="Food Fire Logo" />
  </Link>
);
//const loggedInUser = () => true;
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <div className="flex justify-between bg-pink-50 shadow-inner">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">
              <img
                src="https://img.icons8.com/fluency-systems-regular/24/null/home.png"
                alt="Home"
              />
            </Link>
          </li>
          <li className="px-2">
            <Link to="/about">
              <img
                src="https://img.icons8.com/fluency-systems-regular/24/null/about.png"
                alt="About"
              />
            </Link>
          </li>
          <li className="px-2">
            <Link to="/contact">
              <img
                src="https://img.icons8.com/fluency-systems-regular/24/null/contact-card.png"
                alt="Contact"
              />
            </Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">
            <img src="https://icons8.com/icon/Uz0dKCAVQ1LW/instant" />
            </Link>
          </li >
          {loggedInUser ? (
            <li onClick={() => setLoggedInUser(false)} className="px-2">logout</li>
          ) : (
            <li onClick={() => setLoggedInUser(true)} className="px-2">login</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
