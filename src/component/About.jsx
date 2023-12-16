import { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../../utils/userContext";
import { emailInput, nameInput } from "../../utils/Style";

const About = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="search-container">
      <h2>About us</h2>
      <p>Namsthe react</p>
      <Outlet />
      <div className="flex-wrap mx-10">
        <input
          type="text"
          placeholder="name"
          className={nameInput}
          value={user.name}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
        <input
          type="email"
          placeholder="email"
          className={emailInput}
          value={user.email}
          onChange={(e) => {
            setUser((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
      </div>
    </div>
  );
};

export default About;
