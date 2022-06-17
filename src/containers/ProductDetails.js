import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productAction";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();
  const product_details = useSelector((state) => state.product);

  console.log("product_details", product_details);
  const fecthProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    console.log(response.data);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fecthProductDetails();
    return () => {
        dispatch(removeSelectedProduct());
    }
  }, [productId]);
  return (
    <div className="details-section container-fluid">
      <div className="row details-container">
        <div className="col col-lg-6 border product-image">
          <img
            src={product_details.image}
            style={{ maxWidth: "200px" }}
            alt=""
          />
        </div>
        <div className="col col-lg-6 border product-description">
          <h1>{product_details.title}</h1>
          <h2>$ {product_details.price}</h2>
          <p>{product_details.description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
