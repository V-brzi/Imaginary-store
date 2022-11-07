import React, {useState, useContext} from "react";
import {Context} from "../Context";

function BillingForm(){

    const {setCartItems} = useContext(Context);
    const[purchase, setPurchase] = useState("Purchase")

    const[card, setCard] = useState({
        shippingAddress:'',
        contactNumber: '',
        cardType: 'Credit card',
        cardHolderName:'',
        cardNumber:'',
        expDateMMYY: '',
        cvc: ''});

const [showWarning, setShowWarning] = useState(
    [false, false, false, false, false, false]);

    function handleChange(event) {
            const value = event.target.value;
            setCard({
                ...card,
                [event.target.name]: value
            });
        } 

    function handlePurchase(){
        setPurchase("Purchase");
        setCartItems([]);
    };

    function handleSubmit(e){
        e.preventDefault();
        setPurchase("Processing order...");
        setTimeout(handlePurchase, 3000);
    };

    function handleWarning(e){
        setShowWarning(
            showWarning.map((warning, index) => {
                if(e.target.id == index){
                    return warning = true;
                } else return warning;
            }));
    };



    return (
        <form onSubmit={handleSubmit} className="billing-form">
            <h4 className="details-title">Shipping details:</h4>
            <div className="form-input">
                <input
                    id={0}
                    placeholder="Shipping address"
                    name="shippingAdress"
                    type="text"
                    pattern="(.|\s)*\S(.|\s)*"
                    onChange={handleChange}
                    onBlur={handleWarning}
                    focused={showWarning[0].toString()}
                    required={true}
                />
                <span>Please provide shipping address</span>
            </div>
            <div className="form-input">
                <input
                    id={1}
                    placeholder="Contact number"
                    name="contactNumber"
                    type="text"
                    pattern="^(?:\+?\d{2}[ -]?[\d -][\d -]+)$"
                    onChange={handleChange}
                    onBlur={handleWarning}
                    focused={showWarning[1].toString()}
                    required={true}
                />
                <span>Please provide correct phone number</span>
            </div>

            <h4 className="details-title">Billing details:</h4>
            <div className="card-type">
                <label className="checkbox-container">
                    <input 
                        type="radio"
                        id="credit-card"
                        name="cardType"
                        value="Credit card"
                        checked={card.cardType === "Credit card"}
                        onChange={handleChange}
                    />
                    Credit card
                </label>
                <label className="checkbox-container">
                    <input 
                        type="radio"
                        id="debit-card"
                        name="cardType"
                        value="Debit card"
                        checked={card.cardType === "Debit card"}
                        onChange={handleChange}
                    />
                    Debit card
                </label>
                <label className="checkbox-container">
                    <input 
                        type="radio"
                        id="paypal"
                        name="cardType"
                        value="Paypal"
                        checked={card.cardType=== "Paypal"}
                        onChange={handleChange}
                    />
                    Paypal
                </label>
            </div>
            <div className="form-input">
                <input
                    id={2}
                    placeholder="Cardholder name"
                    name="cardHolderName"
                    type="text"
                    pattern="^[\p{L} ]{1,40}$"
                    onChange={handleChange}
                    onBlur={handleWarning}
                    focused={showWarning[2].toString()}
                    required={true}
                />
                <span>Please provide cardholder full name</span>
            </div>
            <div className="form-input">
                <input
                    id={3}
                    placeholder="Card number"
                    name="cardNumber"
                    type="text"
                    pattern="^[0-9]{16}$"
                    onChange={handleChange}
                    onBlur={handleWarning}
                    focused={showWarning[3].toString()}
                    required={true}
                />
                <span>Please provide 16 digits card name</span>
            </div>
            <div className="date-cvc">
                <div className="form-input">
                    <input
                        id={4}
                        placeholder="Exp. MM/YY"
                        name="expDateMMYY"
                        type="text"
                        pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                        onChange={handleChange}
                        onBlur={handleWarning}
                        focused={showWarning[4].toString()}
                        required={true}
                    />
                    <span>Please provide MM/YY expiry date</span>
                </div>
                <div className="form-input">
                    <input
                    id={5}
                    placeholder="CVC"
                    name="cvc"
                    type="text"
                    pattern="^[0-9]{3,4}$"
                    onChange={handleChange}
                    onFocus={handleWarning}
                    focused={showWarning[5].toString()}
                    required={true} />
                    <span>Should be 3 or 4 digits located at the back of the card</span>
                </div>
            </div>
            <button type="submit" className="purchase-btn">{purchase}</button>
        </form>
    )
}

export default BillingForm;