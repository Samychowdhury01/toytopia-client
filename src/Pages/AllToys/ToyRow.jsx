import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ToyRow = ({toy, index}) => {
    const {_id, seller, toyName, subCategory, price, availableQuantity} = toy
    return (
             <tr>
                <th>{index +1}</th>
                <td>{seller}</td>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td>{price}$</td>
                <td>{availableQuantity}</td>
                <td>
                   <Link to={`/toys/${_id}`} className='btn btn-warning'>
                   <p className='flex items-center gap-2'>

                   <span>View Details</span> <FaArrowRight/>
                   </p>
                   </Link>
                   
                </td>
               
              </tr>
        
    );
};

export default ToyRow;