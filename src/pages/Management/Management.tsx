/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";
import bannerBg from "../../assets/product-page-banner-bg.jpg";
import { MdAddCircleOutline } from "react-icons/md";
import { SetStateAction, useState } from "react";
import UpdateModal from "../../components/Modals/UpdateModal";
import AddProductModal from "../../components/Modals/AddProductModal";
import { useGetAllProductsQuery } from "../../redux/features/product/getAllProducts";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import { useDeleteProductMutation } from "../../redux/features/product/deleteProduct";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const Management = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading: isProductsLoading } = useGetAllProductsQuery({
    page: currentPage,
    limit: 6,
  });

  const [deleteProduct] = useDeleteProductMutation();

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState("");

  const handleUpdateModalOpen = (item: SetStateAction<string>) => {
    setOpenUpdateModal(!openUpdateModal);
    setProductToUpdate(item);
  };

  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const handleAddProductModal = () =>
    setOpenAddProductModal(!openAddProductModal);

  const handleDeleteProduct = async (item: { _id: any; title: string }) => {
    Swal.fire({
      title: `Are you sure you want to delete ${item.title}?`,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProduct(item._id);

        Swal.fire({
          title: "Product has been deleted",
          text: "",
          icon: "success",
        });
      }
    });
  };

  if (isProductsLoading) {
    return <Loader />;
  }

  const totalPage = Math.ceil(data?.data?.total / 6);
  const pages = [...new Array(totalPage).fill(0)];

  const handlePagination = (page: number) => {
    setCurrentPage(page + 1);
    window.scrollTo(0, 200);
  };

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
                    {data.data.data.length === 0
                      ? null
                      : data.data.data.map((item: any, index: number) => (
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
                                onClick={() => handleDeleteProduct(item)}
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

                <div
                  className={`flex items-center justify-center gap-3 w-[80%] mx-auto mt-10`}
                >
                  <Button
                    variant="text"
                    className="hidden md:flex lg:flex items-center gap-2 text-lg capitalize"
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                      window.scrollTo(0, 200);
                    }}
                    disabled={currentPage === 1}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <GrFormPreviousLink size={"30"} />
                    Previous
                  </Button>

                  {pages.map((_item, index) => (
                    <button
                      key={index}
                      className={` px-3 py-1 font-bold text-[12px] md:text-[18px] lg:text-[18px] hover:bg-[#2121211a] rounded-lg ${
                        currentPage === index + 1
                          ? "bg-[#508D4E] text-white rounded-lg hover:!bg-[#1A5319]"
                          : "bg-transparent"
                      }`}
                      onClick={() => handlePagination(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <Button
                    variant="text"
                    className="hidden md:flex lg:flex items-center gap-2 text-lg capitalize"
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                      window.scrollTo(0, 200);
                    }}
                    disabled={currentPage === totalPage}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Next
                    <GrFormNextLink size={"30"} />
                  </Button>
                </div>

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
