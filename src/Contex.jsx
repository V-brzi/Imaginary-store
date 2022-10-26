import React,{useState, useEffect} from "react";

const Context = React.createContext()

function ContextProvider({children}){
    
    const[products, setProducts] = useState("");
    const[favorites, setFavorites] = useState([]);
    const[cartItems, setCartItems] = useState([]);
    const[discount, setDiscount] = useState(0);

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
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[]);

    return(
        <Context.Provider value={{
            products, 
            listenForOutsideClicks, 
            favorites,
            cartItems,
            discount,
            setFavorites,
            setCartItems,
            setDiscount,
            addTo,
            removeFrom}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
