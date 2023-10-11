import React from "react";
import style from "./cardList.module.css"
import { Pagination } from "../index";
import Card from "../card/card";

const CardList = () => {
  return (
  <div className={style.container}>
    <h1 className={style.title}>Recent Post</h1>
    <div className={style.posts}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <Pagination />
  </div>);
};

export default CardList;
