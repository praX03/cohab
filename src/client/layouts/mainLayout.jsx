import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
function Layout({ children, otherChild, showNav, showFooter, classStyles }) {
  return (
    <>
      {showNav ? <Navbar /> : <></>}
      <main className={classStyles}>{children}</main>
      {showFooter ? <Footer /> : <></>}
    </>
  );
}

Layout.defaultProps = {
  showNav: true,
  showFooter: true,
};

export default Layout;
