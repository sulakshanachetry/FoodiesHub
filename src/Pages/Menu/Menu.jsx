import React from "react";
import {MenuItem} from "../../components";
import style from "./Menu.module.scss";
import ButterNaan from "../../assets/butterNaan.jpeg";
import PaneerPyaza from "../../assets/pannerPyaza.jpeg";
import ButterChicken from "../../assets/butterChicken.jpeg";
import VegManchurian from "../../assets/vegManchurian.jpeg";
import Biryani from "../../assets/biryani.jpeg";
import FriedRice from "../../assets/friedRice.jpeg";

function Menu() {
    const MenuList = [
        {
          name: "Butter Naan",
          image: ButterNaan,
          price: 50,
        },
        {
          name: "Paneer Do Pyaza",
          image: PaneerPyaza,
          price: 150,
        },
        {
          name: "Butter Chicken",
          image: ButterChicken,
          price: 190,
        },
        {
          name: "Veg manchurian",
          image: VegManchurian,
          price: 120,
        },
        {
          name: "Biryani",
          image: Biryani,
          price: 290,
        },
        {
          name: "Chicken Fried Rice",
          image: FriedRice,
          price: 280,
        },
      ];
  return (
    <div className={style.menu}>
      <h1 className={style.menuTitle}>Our Menu</h1>
    <div className={style.menuList}>
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;