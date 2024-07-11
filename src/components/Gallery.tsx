import galleryOne from "../assets/gallery-one.jpg";
import galleryTwo from "../assets/gallery-two.jpg";
import galleryThree from "../assets/gallery-three.jpg";
import galleryFour from "../assets/gallery-four.jpg";
import galleryFive from "../assets/gallery-five.jpg";

const Gallery = () => {
  return (
    <section className="bg-[#EEEDEB] pb-20">
      <h2 className="text-2xl text-center font-bold text-gray-800 lg:text-4xl dark:text-white mb-8">
        Explore our <span className="text-[#508D4E]">Image Gallery</span>
      </h2>

      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img
                src={galleryOne}
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 bg-[#508D4E] text-2xl font-medium text-white absolute top-0 left-0 p-2 xs:text-xl md:text-xl rounded-br-lg">
                Oak Tree
              </h3>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <img
                src={galleryTwo}
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 bg-[#508D4E] text-2xl font-medium text-white absolute top-0 left-0 p-2 xs:text-xl md:text-xl rounded-br-lg">
                Maple Tree
              </h3>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img
                  src={galleryThree}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 bg-[#508D4E] text-2xl font-medium text-white absolute top-0 left-0 p-2 xs:text-xl md:text-xl rounded-br-lg">
                  Pine Tree
                </h3>
              </div>
              <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img
                  src={galleryFour}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 bg-[#508D4E] text-2xl font-medium text-white absolute top-0 left-0 p-2 xs:text-xl md:text-xl rounded-br-lg">
                  Sequioa Tree
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img
                src={galleryFive}
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 bg-[#508D4E] text-2xl font-medium text-white absolute top-0 left-0 p-2 xs:text-xl md:text-xl rounded-br-lg">
                Eucalyptus Tree
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
