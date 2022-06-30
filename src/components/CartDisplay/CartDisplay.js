import { useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

function CartDisplay({ actions }) {
  const items = useSelector(store => store.cart.items);
  const products = getProducts();

  let total = 0;
  let output = products
    .filter(product => items[product.productId])
    .map(product => {
      total += product.price * items[product.productId];

      return (
        <CartItem
          product={product}
          quantity={items[product.productId]}
          key={product.productId}
          actions={actions} />
      );
    });

  if (!output.length) {
    output = <h1 className="d-flex justify-content-center">No items in the cart...</h1>;
  }

  return (
    <div className='container'>
      {output}
      <hr />
      <h2 className="d-flex flex-row-reverse"> Total: ${total.toFixed(2)}</h2>
      <Link to="/checkout" className="d-flex flex-row-reverse"><button className="btn btn-info text-monospace font-weight-light fs-20 mx-3">Checkout</button></Link>
    </div>
  );
}

export default CartDisplay;