import React from "react";
import { CgMouse } from "react-icons/all";
import "./home.css";
import ProductCard from "./ProductCard";

const product = [
  {
    name: "Iphone 14pro",
    image: [
      { url: "https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Photo.png" },
    ],
    price: 44000,
    _id: 304939,
  },
  {
    name: "Iphone 13",
    image: [
      {
        url: "https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-PNG.png",
      },
    ],
    price: 52000,
    _id: 390939,
  },
  {
    name: "Iphone 12",
    image: [
      {
        url: "https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Transparent-Picture.png",
      },
    ],
    price: 6000,
    _id: 309939,
  },
  {
    name: "Iphone 12pro",
    image: [
      {
        url: "https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Background.png",
      },
    ],
    price: 80000,
    _id: 384939,
  },
  {
    name: "Iphone Earphone",
    image: [
      {
        url: "https://www.pngmart.com/files/6/Mobile-Earphone-PNG-HD.png",
      },
    ],
    price: 80000,
    _id: 384939,
  },
  {
    name: "Normal Earphone",
    image: [
      {
        url: "https://www.pngmart.com/files/6/Mobile-Earphone-PNG-Free-Download.png",
      },
    ],
    price: 80000,
    _id: 384939,
  },
  {
    name: "7 Earphone",
    image: [
      {
        url: "https://www.pngmart.com/files/7/Mobile-Earphone-PNG-Photos.png",
      },
    ],
    price: 80000,
    _id: 384939,
  },
  {
    name: "Earphone",
    image: [
      {
        url: "https://www.pngmart.com/files/7/Mobile-Earphone-PNG-Background-Image.png",
      },
    ],
    price: 80000,
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
