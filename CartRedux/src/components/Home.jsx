import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../store/slicers/cart';
import Cart from './Cart';


function Home() {
    const [itemInfo, setItemInfo] = useState(" ");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dispatch(addItems(itemInfo))) {
            alert("item added successfully");
            setItemInfo(" ");
            return;
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={itemInfo} onChange={(e) => setItemInfo(e.target.value)} required />
                <input type="submit" value="Add Item" />
            </form>
            <Cart />

        </div>
    )
}

export default Home