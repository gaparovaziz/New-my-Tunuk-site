
import Nav from "../Nav/Nav";

function Toolbar() {
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <Nav />
    </nav>
  );
}

export default Toolbar;