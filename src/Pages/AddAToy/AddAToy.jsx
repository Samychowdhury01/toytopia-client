import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { json } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import Header from "../Shared/Header/Header";

const AddAToy = () => {
  useTitle("Add A Toy");
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.name.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const subCategory = form.category.value;
    const price = form.price.value;
    const availableQuantity = form.quantity.value;
    const rating = form.rating.value;
    const photoUrl = form.photo.value;
    const detailDescription = form.description.value;

    const toyData = {
      toyName,
      seller,
      email,
      subCategory,
      price,
      availableQuantity,
      rating,
      photoUrl,
      detailDescription,
    };

    fetch('http://localhost:5000/toys', {
        method: 'POST',
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(toyData)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.insertedId){
            toast.success('You Have Successfully added a Toy')
            event.target.reset()
        }
    })

  };

  return (
    <>
      <Header title="Add A Toy" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Toy Add Form</h1>
        <form onSubmit={handleSubmit}>
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
                type="text"
                name="photo"
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
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Seller Email
              </label>
              <input
                type="email"
                name="email"
                value={user?.email}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
                readOnly
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
              >
                <option value="">Select a sub-category</option>
                <option value="marvel">Marvel</option>
                <option value="avengers">avengers</option>
                <option value="star wars">star wars</option>
                <option value="transformers">transformers</option>
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
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-gray-700 font-bold mb-2"
              >
                Rating
              </label>
              <input
                type="number"
                name="rating"
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
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-black"
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAToy;
