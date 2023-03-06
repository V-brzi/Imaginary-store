import React,{useState, useEffect} from "react";
import {app, db} from './firebase';
import { setDoc, getDoc, doc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Context = React.createContext()

function ContextProvider({children}){
    
    const[products, setProducts] = useState("");
    const[favorites, setFavorites] = useState([]);
    const[cartItems, setCartItems] = useState([]);
    const[discount, setDiscount] = useState(0);
    const[basePrice, setBasePrice] = useState(0);
    const[currentUser, setCurrentUser] = useState("");

    const auth = getAuth(app);   

    useEffect(() => {

        if(currentUser !== ""){
            const docRef = doc(db, "users", currentUser);

            getDoc(docRef)
            .then( docSnap => {
                if(docSnap){
                    setFavorites(docSnap.data().favorites.map(favorite => favorite));
                    setCartItems(docSnap.data().cart.map(cartItem => cartItem));
                }
            })
        } else {
            setFavorites([]);
            setCartItems([]);
        }
    }, [currentUser])


    useEffect(() => {
        if(currentUser) {
            setDoc(doc(db, 'users', currentUser), {
                favorites: [...favorites],
                cart: [...cartItems]
            });
        };
    }, [favorites, cartItems]);


    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if(user !== null){
                setCurrentUser(user.uid)
            };
        });

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[]);

    //This function is used in Item.jsx, CartItem.jsx and FavoritesItem.jsx files
    // to add products to favorites/cartItems
    function addTo(product, setName){
        setName(oldArray => [...oldArray, product]);
    };
    //This function is used in Item.jsx, CartItem.jsx and FavoritesItem.jsx files to 
    //remove products from favorites/cartItems
    function removeFrom(product,setName){
        setName(oldArray => oldArray.filter(oldProduct => {
            return oldProduct.id !== product.id;
        }));
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
            favorites,
            cartItems,
            discount,
            basePrice,
            currentUser,
            setFavorites,
            setCartItems,
            setDiscount,
            getDiscount,
            addTo,
            removeFrom,
            listenForOutsideClicks}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
