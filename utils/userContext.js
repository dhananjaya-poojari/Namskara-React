import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy user",
    email: "dummyemail@gmail.com",
  },
});

export default UserContext;
