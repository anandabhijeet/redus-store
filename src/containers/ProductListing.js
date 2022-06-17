import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import ProductCardComponent from "./ProductCardComponent";
import { setProducts } from "../redux/actions/productAction";
import "../App.css"

const ProductListing = () => {
  const dispatch = useDispatch();
  const getProductData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="container mt-5 product-component">
      <ProductCardComponent />
    </div>
  );
};

export default ProductListing;
