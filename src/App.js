import React, { useState } from "react";
import Navitagion from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
// Database
import products from "./db/data";
import Card from "./components/Card";


function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  //Input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const filteredItems = products.filter((product) => {
    product.title.toLowerCase().includes(query.toLowerCase())
  })

  // Radio Filter
  const handleChange = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
  }

  // Buttons Filter
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
  }

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;
    if(query) {
      filteredProducts = products
    }
    if(selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => 
             category   === selected 
          || color      === selected 
          || company    === selected 
          || newPrice   === selected 
          || title      === selected
        );
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => {

      return (
        <Card 
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
        
      )
    })


  }

  const results = filteredData(products, selectedCategory, query);

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
