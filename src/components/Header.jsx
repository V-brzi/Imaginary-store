import React, {useContext} from 'react';
import '../styles/Navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import {Context} from "../Context";

function Header() {

  const{favorites, cartItems} = useContext(Context);

  function favoritesStat(){
    if(favorites.length > 0){
      return (
        <div className='nav-stats'>
          
          <Link to="/favorites" className="nav-link"><i className="fa-solid fa-heart fa-xl"></i></Link>
          <span className='nav-fav-num'>{favorites.length}</span>
        </div>
      )
    }
    else return (
      <div className='nav-stats'>
          <Link to="/favorites" className="nav-link"><i className="fa-regular fa-heart fa-xl"></i></Link>
          
      </div>
    )
  }

  function cartItemsStat(){
    if(cartItems.length > 0){
      return(
      <div className='nav-stats'>
      <Link to="/cart" className="nav-link"><i className="fa-solid fa-cart-shopping fa-xl"></i></Link>
      <span className='nav-cart-num'>{cartItems.length}</span>
      </div>
      )}
    else return (
      <div className='nav-stats'>
        <Link to="/cart" className="nav-link"><i className="fa-brands fa-opencart fa-xl"></i></Link>
      </div>
    )
  }

  return (
    <Navbar className="nav">
        <Container className="nav-container">
            <Link to="/" className="nav-title">
              Im<i className="fa-solid fa-house fa-s"></i>ginary store 
            </Link>
            <Nav className="nav-links">
                <Link to="/Login" className="nav-link"><i className="fa-solid fa-user fa-xl"></i></Link>
                <Link to="/store" className="nav-link"><i className="fa-solid fa-store fa-xl"></i></Link>
                {favoritesStat()}
                {cartItemsStat()}
            </Nav>
        </Container>
    </Navbar>
  );
}

export default Header;