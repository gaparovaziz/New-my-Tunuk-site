
import Footer from "../Footer/Footer";
import Toolbar from "../Toolbar/Toolbar";

function Layout({ children }) {

  return (
    <main className="Layout">
      <Toolbar/>
      <div>
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default Layout;