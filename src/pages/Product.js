import { useParams } from "react-router-dom";
import { getProduct } from "../data/products";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";

function Product() {
 const params = useParams();
 const dispatch = useDispatch();
 const productId = getProduct(params.productId);

 if (!productId) {
  return null;
 }

 function onAddToCart() {
  dispatch(add(params.productId));
  console.log(params.productId)
 }

 return (
  <div className="row p-5" style={{alignItems: 'center'}}>
   <div className="col-md-6 mr-14">
    <img src={productId.image} alt={productId.title}  style={{width: '100%'}} />
   </div>
   <div className="col-md-6">
    <h1 className="display-5">{productId.title}</h1>
    <p className="lead fw-bolder">
     Rating {productId.rating && productId.rating.rate}
     <i className="fa fa-star"></i>
    </p>
    <h3 className="display-6 fw-bold my-4">$ {productId.price}</h3>
    <p className="lead">{productId.description}</p>
    <button className="btn btn-success px-4 py-2" onClick={onAddToCart}>
     Add to Cart
    </button>
    <NavLink to="/cart" className="btn btn-primary ms-2 px-3 py-2">
     Go to Cart
    </NavLink>
   </div>
  </div>
 );
}

export default Product;
