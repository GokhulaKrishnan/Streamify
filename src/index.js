import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import "normalize.css";
import App from "./app.js";
import { GlobalStyles } from "./global-styles.js";
import { db, auth } from "./lib/firebase.prod.js";
import { FirebaseContext } from "./context/firebase.js";
// import { seedDatabase } from "./seed";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// seedDatabase();

root.render(
  <>
    <FirebaseContext.Provider value={{ db, auth }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
);
