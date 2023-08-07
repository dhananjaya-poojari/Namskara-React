import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="search-container">
      <h2>About us</h2>
      <p>Namsthe react</p>
      <Outlet />
    </div>
  );
};

export default About;
