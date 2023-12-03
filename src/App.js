import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Error from "./component/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact";
import RestaurantDetails from "./component/RestaurantDetails";
import Profile from "./component/Profile";
import ProfileClass from "./component/ProfileClass";
import userContext from "../utils/userContext";
const InstaMart = lazy(() => import("./component/InstaMart"));
const About = lazy(() => import("./component/About"));

const AppLayout = (props) => {
  const [user, setUser] = useState({
    name: "Robin Singh",
    email: "44robin.rs@gmail.com",
  });
  return (
    <>
      <userContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "instamart",
        element: (
          <Suspense>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
