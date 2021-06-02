import React from "react";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div className="card" key={product.product_id}>
      <a href={`/product/${product.product_id}`}>
        <img
          className="medium"
          src={product.product_image}
          alt={product.product_name}
        />
      </a>
      <div className="card-body">
        <a href={`/product/${product.product_id}`}>
          <h2>{product.product_name}</h2>
        </a>
        <Rating rating={product.rating} no_of_reviews={product.no_of_reviews} />
        <div className="price">R{product.price}</div>
      </div>
    </div>
  );
}
