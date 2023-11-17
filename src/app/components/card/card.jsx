import React from "react";
import style from "./card.module.css"
import Image from "next/image";
import Link from "next/link";


const card = ({item, key}) => {
  return (
    <div className={style.container}>
        <div className={style.imageContainer}>
            <Image src={`/${item.img}`} alt="" fill className={style.image} />
        </div>

        <div className={style.textContainer}>
            <div className={style.detail}>
                <span className={style.date}>{item.createdAt} - </span>
                <span className={style.category}>{item.catSlug}</span>
            </div>

            <Link href={`post/${item.slug}`}>
                <h1>{item.title}</h1>
            </Link>

            <p className={style.desc}>
               {item.desc}
            </p>

            <Link href="/" className={style.link}>Read More</Link>
        </div>
      </div>
  )
};

export default card;
