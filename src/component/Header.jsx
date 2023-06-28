import FishLogo from "../../Icons/icons8-fish-100.png";

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

export default Header;
