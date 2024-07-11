/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import {
  useCheckAvailabilityOfProductMutation,
  useGetSingleProductQuery,
} from "../../redux/features/product/getAllProducts";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import { addToCart, cartCount } from "../../redux/features/addToCart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

const ProductDetails = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

  const [checkIfAvailable, { isLoading: isCheckingLoading }] =
    useCheckAvailabilityOfProductMutation({});

  if (isLoading) {
    return <Loader />;
  }

  const handleAddToCart = async (item: any) => {
    const result = await checkIfAvailable(id);

    if (result.error) {
      Swal.fire({
        title: "This product has been stocked out!!",
        text: "",
        icon: "error",
      });

      return;
    }

    try {
      dispatch(cartCount(item._id));
      dispatch(addToCart(item));
      Swal.fire({
        icon: "success",
        title: `${item.title} has been added to your cart.`,
        text: ``,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You've can't add this product to cart more than it's available quantity!",
      });
    }
  };

  return (
    <div>
      <div className="bg-[#EEEDEB] py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <img
                  src={data.data.image}
                  loading="lazy"
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-600 text-lg">
                  {data.data.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {data.data.title}
                </h2>
              </div>

              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <div className="flex h-7 items-center gap-1 rounded-full bg-[#508D4E] px-2 text-white">
                  <span className="text-lg">{data.data.rating}</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <div>
                  <p className="text-lg bg-[#508D4E] text-white px-2 rounded-full">
                    Available quantity: {data.data.quantity}
                  </p>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-2 text-gray-600 text-lg">
                <p>{data.data.description}</p>
              </div>

              <div className="flex gap-2.5">
                <button
                  disabled={isCheckingLoading}
                  onClick={() => handleAddToCart(data.data)}
                  className="inline-block flex-1 rounded-lg bg-[#508D4E] px-8 py-3 text-center text-sm font-semibold text-white outline-none transition duration-100 hover:bg-[#1A5319] focus-visible:ring active:bg-[#508D4E] sm:flex-none md:text-base"
                >
                  {isCheckingLoading ? (
                    <div className="flex justify-center items-center gap-4">
                      Please Wait
                    </div>
                  ) : (
                    "Add to cart"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
