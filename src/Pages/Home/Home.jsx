import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../assets/backgroundHome.jpg";
import style from "./Home.module.scss";
import MultiplePizzas from "../../assets/multiplePizzas.jpeg";

function Home() {
  return (
   
    <div className={style.home}  style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className={style.headerContainer}>
        <h1> FOODIES' HUB </h1>
        <p> FOOD THAT MAKES YOU SMILE</p>
        <Link to="/Menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
    
    
  
 
    
  );
}

export default Home;