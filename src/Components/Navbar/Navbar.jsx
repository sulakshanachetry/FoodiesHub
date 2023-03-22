
import React, { useState } from "react";
import Logo from "../../Assets/biryani.png";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
//     const [openLinks, setOpenLinks] = useState(false);

//   const toggleNavbar = () => {
//     setOpenLinks(!openLinks);
//   };
    return ( 
        <div className={styles.navbar}>
            <div className={styles.leftSide} >
            {/* id={openLinks ? "open" : "close"}> */}
                <img src={Logo}  />
                {/* <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Offers">Offers</Link>
                <Link to="/Contact">Contact</Link> 
         </div> */}
            </div>

            <div className={styles.rightSide}>
                <Link to="/">Home</Link>
                {/* <Link to="/About">About</Link> */}
                <Link to="/Menu">Menu</Link>
                <Link to="/Offers">Offers</Link>
                <Link to="/Contact">Contact</Link>
                {/* <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button> */}
            </div>
        </div>
     );
}
 
export default Navbar;