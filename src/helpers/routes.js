import React from "react";
import { Navigate, Route } from "react-router-dom";

// export function IsUserRedirect({ user, loggedInPath, children }) {
//   if (user) {
//     console.log(user);
//     return <Navigate to={loggedInPath} />;
//   }

//   return children;
// }

export function IsUserRedirect({ user, loggedInPath, children }) {
  // If user is logged in, redirect them to the loggedInPath
  if (user) {
    console.log(user);
    return <Navigate to={loggedInPath} />;
  }

  // If user is not logged in, render children
  return children;
}

// export function ProtectedRoute({ user, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       element={
//         user ? (
//           children
//         ) : (
//           <Navigate to="/signin" state={{ from: rest.location }} />
//         )
//       }
//     />
//   );
// }
export function ProtectedRoute({ user, children, ...restProps }) {
  console.log(user);

  // If user is authenticated, show the children components
  if (user) {
    console.log("User is there");
    return children;
  }

  // If user is not authenticated, redirect to the signin page
  console.log("Other");
  return <Navigate to="/signin" />;
}
