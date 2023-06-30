import React, {useContext} from "react";
import Card from 'react-bootstrap/Card';
import Info from "./Info";
import {Context} from "../Context";
import "../styles/Item.scss";

function Item({product}) {

  const{favorites, 
        addTo, 
        removeFrom,
        setFavorites,
        cartItems,
        setCartItems} = useContext(Context);

function isFavorite(){

  const containsFav = favorites?.some(item => item.id === product.id);

      return (containsFav ? 
      <i 
      className="fa-solid fa-heart fa-lg" 
      onClick={() => removeFrom(product,setFavorites)}></i> :
      <i 
      className="fa-regular fa-heart fa-lg" 
      onClick={() => addTo(product,setFavorites)}></i>
)};

function isCart(){

  const containsCart = cartItems?.some(item => item.id === product.id);
  
  return(
    containsCart ? 
      <i 
      className="fa-solid fa-cart-shopping fa-lg" 
      onClick={() => removeFrom(product,setCartItems)}></i> :
      <i 
      className="fa-brands fa-opencart fa-lg" 
      onClick={() => addTo(product,setCartItems)}></i>
  )
};

  return (
    <Card className="card">
        
      <Card.Img variant="top" src={product.image} className="card-img"/>
      <Info 
      product={product}/>
      <Card.Body className="card-text">
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