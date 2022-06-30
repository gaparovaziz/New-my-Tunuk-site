// import "./Header.css";

function Header({ image }) {
 return (
  <header className="Header">
   <div className="card bg-dark text-white border-0">
    <img src={image} className="card-img" alt="background" height={650} />
    <div className="container card-img-overlay d-flex flex-column justify-content-center">
     <div className="d-flex flex-row-reverse" style={{textAlign: 'right'}}>
      <h5 className="card-title display-3 fw-bolder mb-0" style={{width: '29rem'}}>
       NEW SEASON SNEAWKERS
      </h5>
     </div>
      <p className="card-text lead fs-2 d-flex flex-row-reverse">FIND YOUR TREND</p>
    </div>
   </div>
  </header>
 );
}

export default Header;
