import React from 'react'
import { Link } from 'react-router-dom';
import { Rating } from "@material-ui/lab";

const ProductCard = ({product}) => {
    const options = {
        edit:false,
       color:"rgba(20,20,20,0.1)",
       activeColor:"tomato",
        value:4,
        inHalf:true
      };


      return (
        <Link className="productCard">
          <img src={product.image[0].url} alt={product.name} />
          <p>{product.name}</p>
          <div>
            <Rating {...options} />{" "}
            <span className="productCardSpan">
              {" "}
              ({product.numOfReviews} 200 Reviews)
            </span>
          </div>
          <span>{`₹${product.price}`}</span>
        </Link>
      )
}

export default ProductCard
