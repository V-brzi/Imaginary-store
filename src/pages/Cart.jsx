import React, {useContext, useState} from "react";
import {Context} from "../Context";
import {Link} from "react-router-dom"
import CartItem from "../components/CartItem";
import Carousel from "../components/Carousel";
import "../styles/Cart.scss"

function Cart() {

    const {cartItems, basePrice, getDiscount } = useContext(Context);
    const [slides] = useState(
        ["Purchase above 300$ gets 10% discount.", 
        "Purchase above 600$ gets 20% discount.", 
        "Purchase on our birthday gets 75% discount."]);


    const displayCartItems = cartItems && cartItems.map(cartItem =>
        <CartItem key={cartItem.id} cartItem={cartItem} />
    )
    
    return (
        <main className="cart">
            {cartItems.length > 0 ?
            <div className="cart-content">
                <Carousel slides = {slides} />
                {displayCartItems}
                <div className="total-price">
                    {basePrice !== getDiscount() ? 
                    <h5 className="old-price">{basePrice.toFixed(2)} $</h5> : ''}
                    <h5 className="new-price">Total: {getDiscount().toFixed(2)} $</h5>
                </div> 
                <Link to="/billing">
                    <button className="check-out-btn">Check out</button>  
                </Link>  
            </div> : 
            <div className="empty-message">
                <h1>Cart is empty.</h1>
            </div>
            }
        </main>
    )
}

export default Cart;