import Footer from './Footer';
import Header from './Header';

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
