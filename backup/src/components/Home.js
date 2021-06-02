import React from "react";
import Product from "./Product";
import data from "../data";

export default function Home() {
  return (
    <div className="row centre">
      {data.products.map((product) => (
        <Product product={product} key={product.product_id} />
      ))}
    </div>
  );
}
