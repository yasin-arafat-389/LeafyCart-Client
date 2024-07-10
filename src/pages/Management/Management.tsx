/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";
import bannerBg from "../../assets/product-page-banner-bg.jpg";
import { MdAddCircleOutline } from "react-icons/md";
import { SetStateAction, useState } from "react";
import UpdateModal from "../../components/Modals/UpdateModal";
import AddProductModal from "../../components/Modals/AddProductModal";
import { useGetAllProductsQuery } from "../../redux/features/product/getAllProducts";
import Loader from "../../components/Loader";

const Management = () => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState("");

  const handleUpdateModalOpen = (item: SetStateAction<string>) => {
    setOpenUpdateModal(!openUpdateModal);
    setProductToUpdate(item);
  };

  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const handleAddProductModal = () =>
    setOpenAddProductModal(!openAddProductModal);

  const { data, isLoading: isProductsLoading } =
    useGetAllProductsQuery(undefined);

  if (isProductsLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div
        className="h-[200px] bg-cover bg-center bg-gray-400 grayscale"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl">Management</h1>
        </div>
      </div>

      <section className="flex flex-col justify-center antialiased bg-[#EEEDEB] text-gray-600 py-20">
        <div className="h-full">
          <div className="w-[90%] mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-xl text-gray-800">
                Products Table
              </h2>

              <Button
                onClick={handleAddProductModal}
                size="md"
                className="bg-[#508D4E] hover:bg-[#1A5319] capitalize text-[15px] flex justify-center items-center gap-2 p-2"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <MdAddCircleOutline size={"20"} />
                <span>Add Product</span>
              </Button>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className={`table-auto w-full`}>
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-gray-800 text-[13px]">
                          Image
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-gray-800 text-[13px]">
                          Title
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-gray-800 text-[13px]">
                          Price
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-gray-800 text-[13px]">
                          Category
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-gray-800 text-[13px]">
                          Quantity
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-gray-800 text-[13px]">
                          Rating
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="text-center text-gray-800 text-[13px]">
                          Action
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {data.data.length === 0
                      ? null
                      : data.data.map((item: any, index: number) => (
                          <tr key={index}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center justify-center">
                                <div className="">
                                  <img
                                    className="rounded-full size-16"
                                    src={item.image}
                                    alt={item.title}
                                  />
                                </div>
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center text-[15px] text-gray-800">
                                {item.title}
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center font-medium text-[15px] text-gray-800">
                                {item.price}
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center text-[15px] text-gray-800">
                                {item.category}
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center text-[15px] text-gray-800">
                                {item.quantity}
                              </div>
                            </td>

                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center text-[15px] text-gray-800">
                                {item.rating}
                              </div>
                            </td>

                            <td className="p-2 flex justify-center items-center gap-3">
                              <Button
                                onClick={() => handleUpdateModalOpen(item)}
                                size="sm"
                                className="capitalize bg-[#508D4E]"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                              >
                                Update
                              </Button>

                              <Button
                                size="sm"
                                className="capitalize bg-red-600"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>

                <UpdateModal
                  open={openUpdateModal}
                  handleOpen={handleUpdateModalOpen}
                  productToUpdate={productToUpdate}
                />

                <AddProductModal
                  open={openAddProductModal}
                  handleOpen={handleAddProductModal}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
