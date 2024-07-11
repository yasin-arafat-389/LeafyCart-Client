import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import companyOne from "../assets/company-one.png";
import companyTwo from "../assets/company-two.png";
import companyThree from "../assets/company-three.png";
import companyFour from "../assets/company-four.png";

const Hero = () => {
  return (
    <section className="pt-20 pb-10 bg-[#EEEDEB]">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-lg text-green-700 font-medium">
            Over 200 trees sold
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
            Nurturing Nature's Beauty in Every Home
          </h2>
          <p className="text-lg">
            Discover our exclusive collection of premium plants, carefully
            selected to enhance your home or office and bring vibrant life to
            your space.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              to={"/products"}
              className="block py-2 px-4 text-center text-white font-medium bg-[#508D4E] duration-150 hover:bg-[#1A5319] active:bg-[#1A5319] rounded-lg shadow-lg hover:shadow-none"
            >
              Let's Explore
            </Link>
          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <img src={heroImage} className="md:rounded-tl-[108px]" alt="" />
        </div>
      </div>
      <div className="mt-[80px] px-4 md:px-8">
        <p className="text-center text-xl text-gray-700 font-semibold">
          Loved by Plant Enthusiasts and Businesses Alike
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-x-12 gap-y-6">
          <img src={companyOne} className="w-[140px]" />
          <img src={companyTwo} className="w-[200px]" />
          <img src={companyThree} className="w-[200px]" />
          <img src={companyFour} className="w-[140px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
