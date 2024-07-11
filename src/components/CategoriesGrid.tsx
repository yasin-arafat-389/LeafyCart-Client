import indoorPlants from "../assets/indoor-plants.jpg";
import outdoorPlants from "../assets/outdoor-tree.jpeg";
import fruitPlants from "../assets/fruit-tree.jpg";
import flowerPlants from "../assets/flowering-tree.webp";
import { Link } from "react-router-dom";

const CategoriesGrid = () => {
  return (
    <div>
      <div className="bg-[#EEEDEB] dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-center gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl dark:text-white">
                Browse by <span className="text-[#508D4E]">Category</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <Link
              to={`/category/Indoor Plants`}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={indoorPlants}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative bg-[#508D4E] p-2 rounded-lg ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Indoor Plants
              </span>
            </Link>

            <Link
              to={`/category/Outdoor Trees`}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={outdoorPlants}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 bg-[#508D4E] p-2 rounded-lg mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Outdoor Trees
              </span>
            </Link>

            <Link
              to={`/category/Fruit Bearing Trees`}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src={fruitPlants}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 bg-[#508D4E] p-2 rounded-lg mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Fruit-Bearing Trees
              </span>
            </Link>

            <Link
              to={`/category/Flower Trees`}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src={flowerPlants}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 bg-[#508D4E] p-2 rounded-lg mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Flowering Trees
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
