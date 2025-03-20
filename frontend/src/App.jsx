import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./components/loginpage";
import Signuppage from "./components/signuppage";
import Landingpage from "./components/landingpage";
import Homepage from "./messages/homepage";
import Friendlist from "./messages/friendlist.jsx";
import Chatpart from "./messages/chatpart.jsx";
import ProtectedRoute from "./components/protectedroutes.jsx";
import Logout from "./extras/logout.jsx";
import PrivacyPolicy from "./extras/privacypolicy.jsx";
import Editaccount from "./extras/editaccount.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/signup",
    element: <Signuppage />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/privacypolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/editaccount/:id",
    element: <Editaccount />,
  },
  {
    path: "/messages/:id",
    element: (
      <ProtectedRoute
        element={
          <div id="homepage-friendlist">
            <Friendlist /> <Homepage />
          </div>
        }
      />
    ),
  },
  {
    path: "/messages/:id/:friendid",
    element: (
      <ProtectedRoute
        element={
          <div id="homepage-chatpart">
            <Friendlist /> <Chatpart />
          </div>
        }
      />
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
