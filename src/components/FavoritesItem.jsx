import React, {useContext} from "react";
import Rating from "./Rating";
import { Context } from "../Context";


function FavoritesItem({favorite}){

    const {removeFrom, setFavorites} = useContext(Context);
    
    return (
    <div className="favorites-item">
        <div className="favorites-container">
        <img src={favorite.image} className="favorite-img" alt="favorite product image" />
        <Rating rating={favorite.rating} />
        </div>
        <div className="favorites-content">
            <h3 className="product-title"><strong>{favorite.title}</strong></h3>
            <p><strong>Description:</strong> {favorite.description}</p>
            <p><strong>On stock:</strong> {favorite.rating.count} pc</p>
            <div className="favorites-icons">
                <p><strong>Price:</strong> {favorite.price}$</p>
                <i 
                className="fa-solid fa-trash-can"
                onClick={() => removeFrom(favorite, setFavorites)}></i>
            </div>
        </div>
    </div>
)}

export default FavoritesItem;