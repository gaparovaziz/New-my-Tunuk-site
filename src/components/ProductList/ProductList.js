import { useState } from "react";
import ProductItem from "./ProductItem/ProductItem";

function ProductList({ products }) {

 const productItems = products.map((product) => (
  <ProductItem key={product.productId} product={product} />
 ));

 return (
  <div>

   <div className="row">{productItems}</div>
  </div>
 );
}

export default ProductList;
