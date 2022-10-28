import React, {useContext} from "react";
import {Context} from "../Contex";
import CartItem from "../components/CartItem";

function Cart() {

    const {cartItems, discount} = useContext(Context);
    let totalPrice = 0;

    console.log(discount)

    const displayCartItems = cartItems && cartItems.map(cartItem =>
        <CartItem key={cartItem.id} cartItem={cartItem} />
    )
    
    cartItems && cartItems.forEach(cartItem => {
        totalPrice = totalPrice + cartItem.price;
    });

    function getDiscount(){
        let discountPrice = 0;
        if(discount > 0){
            discountPrice = totalPrice * discount
        }else{
            if(totalPrice >= 300){
                discountPrice = totalPrice * 0.9;
            }
            else if(totalPrice >= 600){
                discountPrice = totalPrice * 0.8;
            };
        }
        return discountPrice;
    };

    return (
        <main className="cart">
            {cartItems.length > 0 ?
            <>
                <p className="discount-message">Every purchase above 300$ is 10%, and above 600$ is 20% off.</p>
                <p className="discount-message">On our birthday the discount is 75% fixed.</p>
                {displayCartItems}
                {getDiscount() > 0 ?
                <div className="total-price">
                    <h5 className="old-price">{totalPrice.toFixed(2)} $</h5>
                    <h5 className="new-price">Total: {getDiscount().toFixed(2)} $</h5>
                </div> :
                <h5 className="total-price">Total: {totalPrice.toFixed(2)} $</h5>
                }
                <button className="check-out">Check out</button>    
            </> : 
            <div className="empty-message">
                <h1>Cart is empty.</h1>
            </div>
            }
        </main>
    )
}

export default Cart;