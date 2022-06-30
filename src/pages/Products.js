
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
    <div className="row">
     <div className="col-12 my-5">
      <h1 className="display-6 fw-bolder text-center">All products </h1>
      <hr />
     </div>
    </div>
      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;