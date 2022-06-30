import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../redux/authSlice";

export default function Auth() {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const { error, localId } = useSelector(store => store.auth);

 function onAuthStart(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  dispatch(
   start({
    email: formData.get("email"),
    password: formData.get("password"),
    method:
     event.nativeEvent.submitter.innerText === "Sign up" ? "signup" : "signin",
   })
  );
 }

 console.log(localId)
 if (localId !== null) {
  navigate('/');
}


 return (
  <form onSubmit={onAuthStart}>
   <div className="text-center modal modal-signin position-static d-block">
    <h4 style={{color: 'red'}}>{error}</h4>
    <main className="form-signin w-100 m-auto" style={{ maxWidth: "350px" }}>
     <div className="formSignIn bg-white rounded p-3 bg-secondary shadow-lg">
      <img src='https://d1yjjnpx0p53s8.cloudfront.net/logo-fitform_2.jpg' alt="" width="76" height="76" className="rounded"/>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
       <input
        type="email"
        name="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
       />
       <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mt-2">
       <input
        type="password"
        name="password"
        className="form-control"
        id="floatingPassword"
        placeholder="Password"
       />
       <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
       <label>
        <input type="checkbox" value="remember-me" /> Remember me
       </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary mb-1">
       Sign in
      </button>
      <button className="w-100 btn btn-lg btn-secondary">
       Sign up
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
     </div>
    </main>
   </div>
  </form>
 );
}
