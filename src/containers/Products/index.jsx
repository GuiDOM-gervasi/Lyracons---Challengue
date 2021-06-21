import React from "react";
import { StyledProducts } from "./StyledProducts";
import Product from "../../components/Product";
import SideBar from "../../components/SideBar";
const Products = ({ color }) => {
  const arrayProducts = [
    {
      img: "",
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      img: "",
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      img: "",
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      img: "",
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      img: "",
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      img: "",
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      img: "",
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
    {
      img: "",
      title: "Título del producto",
      brand: "Marca",
      price: "12.345,00",
    },
  ];

  return (
      <StyledProducts>
      <SideBar color={color} />
      <div className="container">
        {arrayProducts.map((p) => (
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
