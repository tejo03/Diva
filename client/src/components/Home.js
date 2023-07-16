import React from 'react'
import {Link} from "react-router-dom";
import Header from './Header';
import Medium from './medium';
import Footer from './Footer';
import './App.css'
import 'react-slideshow-image/dist/styles.css'
const Home=() =>{
    return (
        <div>
            <Header/>
            <div > <div className="home-container">
      <div className="image-container" >
        <img
          src="https://www.refinedprose.com/wp-content/uploads/2022/01/strong-women-empowerment-group-names.jpg"
          alt="Strong Women Empowerment Group"
          className="home-image"
          width={"100px"}
        />
      </div>
      <div className="content-container">
        <h1 style={{paddingTop:"150px",paddingLeft:"15px"}}>Welcome to our Strong Women Empowerment Group</h1>
        <p style={{paddingTop:"50px",paddingLeft:"15px"}}>
          We are a community of independent and ambitious women, supporting each other to achieve greatness and make a positive impact in the world.
        </p >
        <button className="home-button" style={{marginLeft:"150px"}} >Join Us</button>
      </div>
    </div>

            </div>
            
        </div>

    );
}
export default Home;