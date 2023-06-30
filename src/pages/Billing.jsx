import React, {useContext} from "react";
import BillingForm from "../components/BillingForm";
import {Context} from "../Context";
import "../styles/Billing.scss";

function Billing(){

    const{getDiscount, cartItems} = useContext(Context)

    return (
        <main className="billing">
            {cartItems.length > 0 ?
            <div className="billing"> 
                <div className="summary">
                    <h4 className="summary-title">Summary:</h4>
                    <div className="summary-content">
                        <div>
                            <p>Products:</p> 
                            <p className="summary-item-right">{getDiscount().toFixed(2)} $</p>
                        </div>
                        <div>
                            <p>Shipping: </p>
                            <p className="summary-item-right">Gratis</p>
                        </div>
                        <div>
                            <p>Total:</p>
                            <p className="summary-item-right">{getDiscount().toFixed(2)} $</p>
                        </div>
                    </div>
                    <img 
                        src="https://th.bing.com/th/id/R.0a96bba867ff10c2f443bf82b7220200?rik=YoVGpmTPvaThrw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fcredit-card-transparent-background%2fcredit-card-transparent-background-2.png&ehk=ya7oduhmxCibIxrSO%2bqD3CDw4mfTlKGMFqJoG00MxjI%3d&risl=&pid=ImgRaw&r=0"
                        alt="bank card img" />
                </div>
                <BillingForm />
            </div> :
            <div className="order-closed">
                <img src="https://images.onlinelabels.com/Images/Predesign/00000001/797/Thank-You-For-Ordering-With-Us-Editable-Label-Design-Free.PNG" alt="check out image" /> 
            </div> }
        </main>
    )
}

export default Billing;