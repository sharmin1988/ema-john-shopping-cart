import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'

const Orders = () => {
    const { products, savedData } = useLoaderData()
    const [cart, setCart] = useState(savedData)

    const handelButtonDelete = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className="order-container">
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handelButtonDelete={handelButtonDelete}
                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;