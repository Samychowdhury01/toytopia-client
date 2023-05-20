import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";

const BestSellingToy = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toytopia-server-iota.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data.slice(0, 3));
      });
  }, []);
  console.log(toys);
  return (
    <div className="my-32 p-5">
      <div className="text-center space-y-5 mb-10">
        <h1 className="text-center text-5xl font-extrabold ">
          Our Best Selling Toys
          <span className="text-[#FFBB00] font-extrabold">.</span>
        </h1>
        <p className="md:w-1/2 mx-auto text-gray-00">
          Get ready to be amazed by our handpicked selection of the trendiest,
          most popular products. Do not miss out on these must-have toys that
          are flying off our shelves!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {toys.map((toy) => (
          <>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={toy.photoUrl} alt="toy-photo" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{toy.toyName}</h2>
                <p>
                  <span className="text-lg font-extrabold mr-2">Price:</span>
                  {toy.price}$
                </p>

                <div className="flex items-center gap-2">
                  <Rating style={{ maxWidth: 100 }} value={toy.rating} readOnly />{" "}
                  <span>{toy.rating}</span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
     <div className="mt-10 text-center">
     <Link to='/toys' className="btn btn-warning normal-case">View All Toys</Link>
     </div>
    </div>
  );
};

export default BestSellingToy;
