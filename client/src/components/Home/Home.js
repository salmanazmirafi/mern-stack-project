import React from "react";
import { CgMouse } from "react-icons/all";
import "./home.css";
import ProductCard from "./ProductCard";

const product = [
  {
    name: "Iphone",
    image: [
      { url: "https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Photo.png" },
    ],
    price: 4000,
    _id: 304939,
  },
  {
    name: "Iphone",
    image: [
      {
        url: "https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-PNG.png",
      },
    ],
    price: 4000,
    _id: 390939,
  },
  {
    name: "Iphone",
    image: [
      {
        url: "https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-Picture.png",
      },
    ],
    price: 4000,
    _id: 309939,
  },
  {
    name: "Iphone",
    image: [
      {
        url: "https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Background.png",
      },
    ],
    price: 4000,
    _id: 384939,
  },
];

const Home = () => {
  return (
    <>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        {product &&
          product.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Home;
