import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {Link} from "react-router-dom";
import "../App.css"
const ProductCardComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => { 
    const {id, title, image, price, category} = product;
    return (
       
      <div className="card mx-2, my-3" key={id} style={{ width: "15rem" }}>
        <img src={image} className="card-img-top card-image" alt={category}  />
        <div className="card-body">
          <p  style={{fontSize:"15px", width:"150px", overflow:"hidden", textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{title}</p>
          <p className="card-text">
            {price}
          </p>
         <Link to={`./product/${id}`}><button type="button" className="btn btn-primary">Buy Now</button></Link>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductCardComponent;
