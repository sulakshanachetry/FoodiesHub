
// import Logo from "../../Assets/biryani.png";
// import { Link } from "react-router-dom";
// import styles from "./Navbar.module.scss";

// const Navbar = () => {
//     return ( 
//         <div className={styles.navbar}>
//             <div className={styles.leftSide} >
//                 <img src={Logo}  />
//             </div>

//             <div className={styles.rightSide}>
//                 <Link to="/">Home</Link>
//                 <Link to="/Menu">Menu</Link>
//                 <Link to="/Offers">Offers</Link>
//                 <Link to="/Contact">Contact</Link>
//             </div>
//         </div>
//      );
// }
 
// export default Navbar;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/biryani.png";
import icon from "../../Assets/three-lines.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
        <img src={Logo}  />
        </div>
        <div className={styles.menuicon} onClick={handleShowNavbar}>
        <img src={icon}  />
        </div>
        <div className={`${styles['navelements']} ${showNavbar ? styles.active : ''}`}>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/Offers">Offers</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            {/* <li>
              <Link to="/Menu">Contact</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;