import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToyRow = ({ toy, index, handleDelete }) => {
  const { _id, toyName, subCategory, price, availableQuantity, photoUrl } = toy;


  return (
    <tr>
      <th>{index + 1}</th>
      <th>
        <img src={photoUrl} alt="toy-photo" className="w-16" />
      </th>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}$</td>
      <td>{availableQuantity}</td>
      <td>
        <Link to={`/update-toy/${_id}`} className="btn btn-warning">
          <div className="flex items-center gap-2">
            <div className="tooltip" data-tip="Update your toy details">
              <FaRegEdit className="text-xl" />
            </div>
          </div>
        </Link>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default MyToyRow;
