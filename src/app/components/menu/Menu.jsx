import React from "react";
import style from "./Menu.module.css"

import MenuPosts from "../menuPosts/MenuPosts";
import { CategoryList } from "..";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>What's Hot</h2>
      <h1 className={style.title}>Most Popular</h1>
        <MenuPosts withImage={false}/>

        <h2 className={style.subtitle}>Discover By Topic</h2>
        <h1 className={style.categories}>Categories</h1>

        <MenuCategories />
        <MenuPosts withImage={true}/>
    </div>
  );
};

export default Menu;
