import React, {useState, useContext} from "react";
import Card from 'react-bootstrap/Card';
import Info from "./Info";
import {Context} from "../Contex";



function Item({product}) {

  const[showIcons, setShowIcons] = useState(false);
  const{favorites, 
        addTo, 
        removeFrom,
        setFavorites,
        cartItems,
        setCartItems} = useContext(Context);

function isFavorite(){

  const containsFav = favorites?.some(item => item.id === product.id);

      return (containsFav ? showIcons && 
      <i 
      className="fa-solid fa-heart fa-lg" 
      onClick={() => removeFrom(product,setFavorites)}></i> :
      showIcons && 
      <i 
      className="fa-regular fa-heart fa-lg" 
      onClick={() => addTo(product,setFavorites)}></i>
)}

function isCart(){

  const containsCart = cartItems?.some(item => item.id === product.id);
  
  return(
    containsCart ? showIcons && 
      <i 
      className="fa-solid fa-cart-shopping fa-lg" 
      onClick={() => removeFrom(product,setCartItems)}></i> :
      showIcons && 
      <i 
      className="fa-brands fa-opencart fa-lg" 
      onClick={() => addTo(product,setCartItems)}></i>
  )
}

  return (
    <Card 
      className="card"
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
      data-trigger="focus">
        
      <Card.Img variant="top" src={product.image} className="card-img"/>
      <Info 
      product={product}/>
      <Card.Body>
        <Card.Title className="product-title">{product.title}</Card.Title>
        <Card.Text>
          {product.price} $
          {isFavorite()}
          {isCart()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;