import React, {useContext} from "react";
import {Context} from "../Contex";
import Item from "../components/Item";
import DiscountCounter from "../components/DiscountCounter";


function Homepage() {

    const { products } = useContext(Context);

    const items = products && products.map(product => (<Item 
        key={product.id}
        product={product}
    /> ));

    return (
        <main className="homepage">
            <DiscountCounter />
            <div className="grid-items-container">
                {items}
            </div>
        </main>
    );
}

export default Homepage;