import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <main className="home">
            <h2 className="home-title">Welcome to imaginary store</h2>
            <Link to="/Imaginary-store/store" className="link">
                <img 
                src="https://cdn-images.zety.com/pages/retail_cover_letter_example_zety_uk_2.jpg"
                alt="home-img" 
                className="home-img"/>
            </Link>
            <Link to="/Imaginary-store/favorites" className="link">
                <img 
                src="https://th.bing.com/th/id/R.510a3e2699445e484feb451e62f00cf4?rik=DAKr91iQTYVaIg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-e5J59_wRA-s%2fTVlDhChyHPI%2fAAAAAAAABGw%2fg6KZJzvhU7w%2fw1200-h630-p-k-no-nu%2fcropped-line-of-hearts.jpg&ehk=c3HBpZ5BvqlJijdu6PpAaZFid8iVPsFCmN2mPOe0FVU%3d&risl=&pid=ImgRaw&r=0"
                alt="home-img" 
                className="home-img"/>
            </ Link>
            <Link to="/Imaginary-store/cart" className="link">
                <img 
                src="https://codvo.in/images/projects/ecommerce.jpg"
                alt="home-img" 
                className="home-img"/>
            </ Link>
        </main>
    )
}

export default Home;