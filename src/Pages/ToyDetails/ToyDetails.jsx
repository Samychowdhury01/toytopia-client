import React from "react";
import useTitle from "../../Hooks/useTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";

const ToyDetails = () => {
  useTitle("Toy Details");
  const toy = useLoaderData();
  const {
    seller,
    toyName,
    subCategory,
    price,
    availableQuantity,
    email,
    rating,
    photoUrl,
    detailDescription,
  } = toy;

  return (
    <>
      <Header title="Toy Details" />
      <div className="card md:h-[500px] lg:card-side bg-base-100 drop-shadow-2xl m-5">
        <figure>
          <img
            src={photoUrl}
            alt="toy-photo"
            className="object-contain w-full h-full md:mr-10 p-5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Toy Name: {toyName}</h2>
          <p>
            <span className="text-lg font-extrabold mr-2">Seller:</span>
            {seller}
          </p>
          <p>
            <span className="text-lg font-extrabold mr-2">Seller Email:</span>
            {email}
          </p>
          <p>
            <span className="text-lg font-extrabold mr-2">Sub-category:</span>
            {subCategory}
          </p>
          <p>
            <span className="text-lg font-extrabold mr-2">
              Available Quantity:
            </span>
            {availableQuantity}
          </p>
          <p>
            <span className="text-lg font-extrabold mr-2">Price:</span>
            {price}$
          </p>
          <p>
            <span className="text-lg font-extrabold mr-2">Description:</span>
            {detailDescription}
          </p>
          <div className="flex items-center gap-2">
            <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
