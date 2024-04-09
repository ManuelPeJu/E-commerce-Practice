import React from "react";
import Navitagion from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
function App() {
  return (
      <>
        <Navitagion />
        <Recommended />
        <Products />
      </>
  );
}

export default App;
