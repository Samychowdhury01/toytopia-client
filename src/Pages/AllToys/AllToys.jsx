import React, { useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import Banner from "../Home/Banner/Banner";
import Header from "../Shared/Header/Header";
import ToyRow from "./ToyRow";

const AllToys = () => {
  useTitle('All Toys')
  const loadedToys = useLoaderData()
  const [toys, setToys] =useState(loadedToys)

const handleSearch = event =>{
  event.preventDefault()
  const searchText = event.target.search.value
 
  fetch(`http://localhost:5000/searchToyByName/${searchText}`)
  .then(res => res.json())
  .then(data => setToys(data))
}

  return (
    <div>
      <Header title='Explore All Toys'/>
      <div>
      <div className="flex justify-center mb-10">
      <form onSubmit={handleSearch} className="form-control">
          <div className="input-group">
            <input
              type="text"
              name="search"
              placeholder="Search Toy By Name…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
            <p className="text-center mt-5">{toys.length === 0 ? 'No Data Found' : ''}</p>
        </form>
      </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
             {
                toys?.map((toy, index) =>
                  <ToyRow
                  key={toy?._id}
                  index={index}
                  toy={toy}
                  />
                 )
             }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
