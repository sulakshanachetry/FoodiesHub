import React from "react";
import styles from "./MenuItem.module.scss";

function MenuItem({ image, name, price }) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuItemDiv} style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
      <p> Rs{price} </p>
    </div>
  );
}

export default MenuItem;