import React from "react";
import Header from "./containers/Header"; 
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>}/>
        <Route path="*" element={<ProductListing/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
