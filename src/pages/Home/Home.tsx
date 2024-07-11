import BrowseProducts from "../../components/BrowseProducts";
import CategoriesGrid from "../../components/CategoriesGrid";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoriesGrid />
      <BrowseProducts />
      <Gallery />
    </div>
  );
};

export default Home;
