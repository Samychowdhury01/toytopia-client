import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, toyName, photoUrl, rating, price } = toy;
  return (
    <div className="card bg-base-100 w-80 mx-auto shadow-xl">
      <div className="h-[250px]">
        <img
          src={photoUrl}
          alt="toy-photo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>
          <span className="text-lg font-extrabold mr-2">Price:</span>
          {price}$
        </p>

        <div className="flex items-center gap-2"><Rating style={{ maxWidth: 100 }} value={rating} readOnly /> <span>{rating}</span></div>
        <div className="card-actions justify-end mt-2">
          <Link to={`/toys/${_id}`}>
            <button className="btn btn-warning">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
