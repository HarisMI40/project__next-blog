import React from "react";
import style from "./card.module.css"
import Image from "next/image";
import Link from "next/link";


const card = () => {
  return (
    <div className={style.container}>
        <div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={style.image} />
        </div>

        <div className={style.textContainer}>
            <div className={style.detail}>
                <span className={style.date}>11.02.2023 - </span>
                <span className={style.category}>CULTURE</span>
            </div>

            <Link href="/">
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h1>
            </Link>

            <p className={style.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloremque quidem reiciendis animi aliquam eos quos ipsum fugiat aliquid velit libero nostrum excepturi nobis nihil sit molestiae, molestias, dignissimos amet.
            </p>

            <Link href="/" className={style.link}>Read More</Link>
        </div>
      </div>
  )
};

export default card;
