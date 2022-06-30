
import { NavLink } from "react-router-dom";

function ProductItem({ product }) {
  return (
      <div className="col-md-3 mb-4" key={product.id}>
        <div className="card h-100 text-center p-4"  style={{borderRadius: '10px'}}>
         <img src={product.image} className="card-img-top" alt={product.title} height={250}/>
         <div className="card-body">
          <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
          <p className="card-text price lead fw-bold">
           ${product.price}
          </p>
          <NavLink to={`/products/${product.productId}`} className="btn btn-primary w-100 lead">
           BUY
          </NavLink>
         </div>
        </div>
       </div>
  );
}

export default ProductItem;