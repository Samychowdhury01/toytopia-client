import React, { useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";

const AllToys = () => {
  const loadedToys = useLoaderData()
  const [toys, setToys] =useState(loadedToys)


  return (
    <div>
      <div className="bg-black text-white h-[30vh] flex flex-col items-center justify-center mb-12">
        <h1 className="text-6xl font-extrabold">Explore All Toys</h1>
      </div>
      <div>
      <div className="flex justify-center mb-10">
      
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
                toys.map((toy, index) =>
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
