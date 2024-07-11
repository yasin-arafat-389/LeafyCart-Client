/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dialog, Input, Textarea } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useUpdateProductMutation } from "../../redux/features/product/updateProducts";
import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";

const UpdateModal = ({ open, handleOpen, productToUpdate }: any) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const [formValues, setFormValues] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    category: "default",
    quantity: "",
    rating: "default",
  });

  useEffect(() => {
    if (productToUpdate) {
      setFormValues({
        image: productToUpdate.image,
        title: productToUpdate.title,
        description: productToUpdate.description,
        price: productToUpdate.price,
        category: productToUpdate.category,
        quantity: productToUpdate.quantity,
        rating: productToUpdate.rating,
      });
    }
  }, [productToUpdate]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      image: formValues.image,
      title: formValues.title,
      description: formValues.description,
      price: parseInt(formValues.price),
      category: formValues.category,
      quantity: parseInt(formValues.quantity),
      rating: parseInt(formValues.rating),
    };

    const id = productToUpdate._id;

    await updateProduct({ id, payload });

    handleOpen();

    Swal.fire({
      title: "Product Updated Successfully!!",
      text: "",
      icon: "success",
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="px-10 py-5">
          <h1 className="text-center text-2xl text-gray-800 font-semibold">
            Update details of {productToUpdate?.title}
          </h1>

          <form className="mt-5 flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              name="image"
              defaultValue={formValues.image}
              label="Image"
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <Input
              name="title"
              label="Title"
              defaultValue={formValues.title}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <Textarea
              name="description"
              label="Description"
              defaultValue={formValues.description}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />

            <Input
              name="price"
              label="Price"
              type="number"
              defaultValue={formValues.price}
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <select
              name="category"
              value={formValues.category}
              className="outline-none px-7 py-2 rounded-lg border border-gray-700"
              onChange={handleChange}
            >
              <option value="default" disabled>
                Select a category
              </option>
              <option value="Indoor Plants">Indoor Plants</option>
              <option value="Outdoor Trees">Outdoor Trees</option>
              <option value="Fruit Bearing Trees">Fruit Bearing Trees</option>
              <option value="Flower Trees">Flower Trees</option>
            </select>

            <Input
              name="quantity"
              defaultValue={formValues.quantity}
              label="Quantity"
              type="number"
              onChange={handleChange}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <select
              name="rating"
              value={formValues.rating}
              className="outline-none px-7 py-2 rounded-lg border border-gray-700"
              onChange={handleChange}
            >
              <option value="default" disabled>
                Ratings
              </option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>

            <Button
              type="submit"
              className="bg-[#508D4E] capitalize text-lg"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex justify-center items-center gap-4">
                  <ImSpinner9 className="animate-spin text-[20px]" />
                  Updating Product
                </div>
              ) : (
                "Update Product"
              )}
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
};

export default UpdateModal;
