
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './Nav.css'

function Nav() {
 const isAuthenticated = useSelector((store) => store.auth.idToken !== null);

 const number = useSelector(store => {
   return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
 });  


 return (
  <div>
   <nav className="navbar navbar-expand-xl bg-dark py-2 shadow-sm">
    <div className="container">
     <NavLink className="navbar-brand fw-bold fs-2" to="/">
     Sneakers style
     </NavLink>
     
     <button 
      className="navbar-toggler" 
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded={false}
      aria-label="Toggle navigation"
     >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
     </button>

     <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
       <li className="nav-item">
        <NavLink className="nav-link" to="/">
         Home
        </NavLink>
       </li>
       <li className="nav-item">
        <NavLink className="nav-link" aria-current="true" to="/products">
         Products
        </NavLink>
       </li>
       <li className="nav-item">
        <NavLink className="nav-link" to="/about">
         About
        </NavLink>
       </li>
       <li className="nav-item">
        <NavLink className="nav-link" to="/contacts">
         Contact
        </NavLink>
       </li>
      </ul>

      <div className="buttons">
       {isAuthenticated ? <NavLink to="/signout" className="btn btn-danger ms-2">Sign out</NavLink> : null}
       {!isAuthenticated ? <NavLink to="/auth" className="btn btn-info ms-2">Sign in</NavLink> : null}

       <NavLink to="/cart" className="btn btn-primary ms-2">
        <i className="fa fa-shopping-cart me-1"></i> Cart ({number})
       </NavLink>
      </div>
     </div>
    </div>
   </nav>
  </div>
 );
}

export default Nav;
