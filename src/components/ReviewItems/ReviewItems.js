import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItems = ({ product, handelButtonDelete }) => {
    const { id, name, price, quantity, img } = product
    return (
        <div className='items-container'>
            <img src={img} alt="" />
            <div className="items-details">
                <div className="items-info">
                    <p>Name : {name}</p>
                    <p>Price: {price}</p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <button onClick={() => handelButtonDelete(id)} className='btn-delete'>
                    <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItems;