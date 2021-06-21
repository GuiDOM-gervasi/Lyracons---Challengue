import React from "react";
import { StyledProducts } from "./StyledProducts";
import Product from "../../components/Product";
import SideBar from "../../components/SideBar";
const Products = ({ color, hello, empty }) => {
  const arrayProducts = [
    {
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
  ];

  return (
    <StyledProducts>
      <SideBar color={color} hello={hello} />
      <div className="container">
        {empty
          ? null
          : arrayProducts.map((p) => (
              <Product
                img={p.img}
                title={p.title}
                brand={p.brand}
                price={p.price}
              />
            ))}
      </div>
    </StyledProducts>
  );
};

export default Products;
