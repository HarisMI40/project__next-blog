import React from "react";
import styles from "./categoryList.module.css"
import Link from "next/link";
import Image from "next/image";


const getDataCategory = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache : "no-store"
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json();
}

const CategoryList = async () => {

  // const data = [
  //   {_id : "1", img : "/coding.png", title : "coding"},
  //   {_id : "2", img : "/fashion.png", title : "fashion"},
  //   {_id : "3", img : "/style.png", title : "style"},
  //   {_id : "4", img : "/travel.png", title : "travel"},
  //   {_id : "5", img : "/culture.png", title : "culture"},
  //   {_id : "6", img : "/food.png", title : "food"},
  // ]

  const data = await getDataCategory();


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kategori Populer</h1>
      <div className={styles.categories}>
        {data?.map(item => (
          <Link
            href={"/blog?cat=" + item.slug}
            className={`${styles.category} ${styles[item.title]}`}
            key={item._id}
          >

            {item.img && (
              <Image
                src={`/${item.img}`}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
