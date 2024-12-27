import React from "react";
import { Browse, Home, SignIn, SignUp } from "./pages/index";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const { user } = useAuthListener(); // Example user object
  // const user = { displayName: "Gokhul", photoURL: "2" };
  console.log(user);

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <Home />
            </IsUserRedirect>
          }
        />
        {/* <Route path={ROUTES.HOME} element={<Home />} /> */}
        <Route path="/user" element={<p>Hello</p>} />

        {/* Use IsUserRedirect to conditionally render SignIn */}
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <SignIn />
            </IsUserRedirect>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
              <SignUp />
            </IsUserRedirect>
          }
        />

        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
