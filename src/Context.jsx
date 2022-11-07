import React,{useState, useEffect} from "react";

const Context = React.createContext()

function ContextProvider({children}){
    
    const[products, setProducts] = useState("");
    const[favorites, setFavorites] = useState([]);
    const[cartItems, setCartItems] = useState([]);
    const[discount, setDiscount] = useState(0);
    const[basePrice, setBasePrice] = useState(0);
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[]);

    function addTo(product,name){
        name(oldArray => [...oldArray, product]);
    };

    function removeFrom(product,name){
        name(oldArray => oldArray.filter(oldProduct => {
            return oldProduct !== product;
        }));
        console.log(favorites);
    };

    function listenForOutsideClicks(listening, setListening, thisRef, setShow) {
        return () => {
            if (listening) return;
            if (!thisRef.current) return;
            setListening(true);
            [`click`, `touchstart`].forEach((type) => {
                document.addEventListener(`click`, (evt) => {
                if (thisRef.current?.contains(evt.target)) return;
                    setShow(false);
                });
            });
            }
        }

    useEffect(() => {
        let newPrice = 0;
        cartItems && cartItems.forEach(cartItem => {
            newPrice = newPrice + cartItem.price
            setBasePrice(newPrice);
    })}, [cartItems]);

    function getDiscount(){
        let totalPrice = basePrice;
        if(discount > 0){
            totalPrice = basePrice * discount
        }else{
            if(totalPrice >= 300){
                totalPrice = basePrice * 0.9;
            }
            else if(totalPrice >= 600){
                totalPrice = basePrice * 0.8;
            };
        }
        return totalPrice;
    };

    return(
        <Context.Provider value={{
            products, 
            listenForOutsideClicks, 
            favorites,
            cartItems,
            discount,
            basePrice,
            setFavorites,
            setCartItems,
            setDiscount,
            getDiscount,
            addTo,
            removeFrom}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
