import React from "react";
import Navitagion from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
function App() {
  return (
      <>
        <Sidebar />
        <Navitagion />
        <Recommended />
        <Products />
      </>
  );
}

export default App;
