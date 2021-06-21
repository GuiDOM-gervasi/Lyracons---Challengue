import React from "react";
import { StyledProduct } from "./StyledProduct";
import auris from "./img/Auriculares.jpg";
const Product = ({ img, title, brand, price }) => {
  return (
    <StyledProduct>
      <img src={auris} alt="auriculares" />
      <div>
        <h3>{title}</h3>
        <span>{brand}</span>
        <span>$ {price}</span>
      </div>
      <button>COMPRAR</button>
    </StyledProduct>
  );
};

export default Product;
