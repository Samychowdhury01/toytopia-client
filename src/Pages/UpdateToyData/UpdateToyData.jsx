import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";

const UpdateToyData = () => {
  const toyData = useLoaderData();
  const {
    _id,
    toyName,
    photoUrl,
    seller,
    subCategory,
    price,
    detailDescription,
    availableQuantity,
  } = toyData;

  const handleUpdate = event =>{
    event.preventDefault();
    const form = event.target;
    const toyName = form.name.value;
    const seller = form.seller.value;
    const subCategory = form.category.value;
    const price = form.price.value;
    const availableQuantity = form.quantity.value;
    const photoUrl = form.photo.value;
    const detailDescription = form.description.value;

    const updatedToyData = {
        toyName,
        seller,
        subCategory,
        price,
        availableQuantity,
        photoUrl,
        detailDescription,
      };
      fetch(`http://localhost:5000/toys/${_id}`, {
        method: 'PUT',
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(updatedToyData)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.modifiedCount > 0){
        toast.success("You Have Successfully Updated Your Toys Details.")
      }
    })
  }


  return (
    <>
      <Header title="Update Your Toy Details" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Update Toy Details
        </h1>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Toy Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={toyName}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="photo"
                className="block text-gray-700 font-bold mb-2"
              >
                Picture URL of the toy
              </label>
              <input
                type="url"
                name="photo"
                defaultValue={photoUrl}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="seller"
                className="block text-gray-700 font-bold mb-2"
              >
                Seller Name
              </label>
              <input
                type="text"
                name="seller"
                defaultValue={seller}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-bold mb-2"
              >
                Sub-category
              </label>
              <select
                name="category"
                className="w-full border border-black-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
                defaultValue={subCategory}
              >
                <option value="">Select a sub-category</option>
                <option value="Marvel">Marvel</option>
                <option value="Avengers">avengers</option>
                <option value="Star wars">star wars</option>
                <option value="Transformers">transformers</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-gray-700 font-bold mb-2"
              >
                Available Quantity
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={availableQuantity}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Detail Description
              </label>
              <textarea
                name="description"
                rows="4"
                defaultValue={detailDescription}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-warning">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateToyData;
