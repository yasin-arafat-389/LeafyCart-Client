/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import bannerBg from "../../assets/product-page-banner-bg.jpg";
import { useAppSelector } from "../../redux/hooks";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div
        className="h-[200px] bg-cover bg-center bg-gray-400 grayscale"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl">Cart</h1>
        </div>
      </div>

      <div className="bg-[#EEEDEB] py-20">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          {cartItems.length === 0 ? (
            <div className="text-5xl font-bold py-10">
              No items found in the cart!!
            </div>
          ) : (
            <div className="rounded-lg md:w-2/3">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={item.image}
                    alt="product-image"
                    className="w-full h-[150px] object-cover object-center rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-xl font-bold text-gray-800">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-lg text-gray-600">
                        {item.category}
                      </p>
                    </div>
                    <div className="flex flex-col gap-5 text-lg text-gray-700">
                      <h1>Quantity: {item.quantity}</h1>

                      <h1>Total Price: {item.quantity * item.price}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700 text-lg">Subtotal</p>
                <p className="text-gray-700 text-lg">৳ {subtotal}</p>
              </div>

              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg text-gray-800 font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg text-gray-800 font-bold">
                    ৳ {subtotal}
                  </p>
                </div>
              </div>
              <Link
                to={"/checkout"}
                className="block text-center mt-6 w-full rounded-md bg-[#508D4E] py-1.5 font-bold text-lg text-white hover:bg-[#1A5319]"
              >
                Check out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
