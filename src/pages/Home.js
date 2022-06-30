import Header from "../components/Header/Header";
import headerImage from "../assets/foneSneakers.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";


function Home() {
  return (
    <>
      <Header image={headerImage}/>
      
      <div className="row">
        <div className="col-12 my-5">
        <h1 className="display-6 fw-bolder text-center">Our trands </h1>
        <hr />
        </div>
      </div>
      <ProductList products={getProducts()} />
    </>
  );
}

export default Home;