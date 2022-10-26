import React, { useContext } from "react";
import { Context } from "../Contex";
import FavoritesItem from "../components/FavoritesItem";

function Favorites() {

    const { favorites } = useContext(Context);

    const displayFavorites = favorites && favorites.map(favorite =>
        <FavoritesItem key={favorite.id} favorite={favorite} />
    )

    return (
        <main className="favorites">
            {favorites.length > 0 ? displayFavorites : 
            <h1 className="empty-message">Favorites list is empty.</h1>}
        </main>
    )
}

export default Favorites;