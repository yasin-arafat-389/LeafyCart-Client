import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../utilities/ScrollToTop";
import { useAppSelector } from "../redux/hooks";
import useWarnIfUnsavedChanges from "../utilities/BeforeUnload";

const MainLayout = () => {
  const cartCount = useAppSelector((state) => state.cart.count);
  const hasCartItems = cartCount > 0;

  useWarnIfUnsavedChanges(hasCartItems);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
