import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "../../redux/cartSlice";

export default function CartItem({ product, actions, quantity }) {
 const dispatch = useDispatch();

 return (
  <div>
   <div className="row justify-content-center my-5" key={product.id}>
    <div className="col-md-4 p-auto">
     <img src={product.image} alt={product.title} height={200} width={180} />
    </div>
    <div className="col-md-4 p-auto">
     <h3>{product.title}</h3>
     <p className="lead fw-bold d-flex align-items-center" style={{gap: '20px'}}>
        <span>${product.price} * {quantity}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
       ${quantity * product.price}
     </p>

     {actions ? (
      <button
       className="btn btn-danger me-3"
       onClick={() => dispatch(decrement(product.productId))}
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        fill="currentColor"
        className="bi bi-dash-lg"
        viewBox="0 0 16 16"
       >
        <path
         fillRule="evenodd"
         d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
        />
       </svg>
      </button>
     ) : null}

     {actions ? (
      <button
       className="btn btn-success me-3"
       onClick={() => dispatch(increment(product.productId))}
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        fill="currentColor"
        className="bi bi-plus-lg"
        viewBox="0 0 16 16"
       >
        <path
         fillRule="evenodd"
         d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        />
       </svg>
      </button>
     ) : null}

     {actions ? (
      <button
       className="btn btn-warning me-3"
       onClick={() => dispatch(remove(product.productId))}
      >
       DEL
      </button>
     ) : null}
    </div>
   </div>
  </div>
 );
}
