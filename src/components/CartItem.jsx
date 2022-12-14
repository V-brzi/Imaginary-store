import React, {useContext} from "react";
import { Context } from "../Context";


function CartItem({cartItem}){

    const {removeFrom, setCartItems} = useContext(Context);
    
    return (
    <div className="cart-item">
        <div className="cart-container">
        <i 
            className="fa-solid fa-trash-can"
            onClick={() => removeFrom(cartItem, setCartItems)}></i>
            <img src={cartItem.image} className="cart-item-img" alt="cart item image" />
        </div>
        <p className="cart-item-price">{cartItem.price.toFixed(2)} $</p>
    </div>
)}

export default CartItem;