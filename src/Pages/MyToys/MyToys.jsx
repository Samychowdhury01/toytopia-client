import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import Header from '../Shared/Header/Header';
import MyToyRow from './MyToyRow';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const MyToys = () => {
  useTitle('My Toys')
const {user} = useContext(AuthContext)
const [myToys, setMyToys] = useState([])
const [sort, setSort] = useState('ascending')

useEffect(()=>{
    fetch(`https://toytopia-server-iota.vercel.app/my-toys?email=${user?.email}`)
    .then(res => res.json())
    .then(data =>{
        setMyToys(data)
    })

},[user])

// handler for delete toy
const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toytopia-server-iota.vercel.app/toys/${id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter(filteredToy => filteredToy._id !== id)
              setMyToys(remaining)
            }
          });
      }
    });
  };

  const handleSorting = () =>{

    if (sort === 'ascending') {
      setSort('descending');
    } else {
      setSort('ascending');
    }

      fetch(`https://toytopia-server-iota.vercel.app/sortedByPrice?email=${user?.email}&sort=${sort}`)
      .then(res => res.json())
      .then(data =>{
          setMyToys(data)
      })
  }

    return (
        <div>
          <Header title='My Toys'/>
          <div className="p-5">
          <div className="flex justify-end mr-5 mb-10">
            <button onClick={handleSorting} className='btn bg-black text-white flex items-center gap-3'>
              sort by price
              {
                sort === 'ascending' ? <FaArrowUp/> : <FaArrowDown/>
              }
              </button>
          </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Photo</th>
                    <th>Toy Name</th>
                    <th>Sub-category</th>
                    <th>Price</th>
                    <th>Available</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                 {
                    myToys?.map((toy, index) =>
                      <MyToyRow
                      key={toy?._id}
                      index={index}
                      toy={toy}
                      handleDelete={handleDelete}
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

export default MyToys;