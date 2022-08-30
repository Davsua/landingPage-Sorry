import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Pdf from "./pdf";

export default function Switc() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <App />
            </>
          }
        />
        <Route
          exact
          path="/pdf"
          element={
            <>
              <Pdf />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
