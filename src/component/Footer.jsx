import { useContext } from "react";
import userContext from "../../utils/userContext";
const Footer = () => {
  const { user } = useContext(userContext);

  return <div className="align-center">{user.email}</div>;
};
export default Footer;
