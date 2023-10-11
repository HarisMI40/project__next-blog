import React from "react";
import style from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return <div className={style.container}>


    <div className={style.info}>
      <div className={style.profil}>
        <Image src="/logo.png" width={50} height={50} />
        <h1>LamaBlog</h1>
      </div>
      <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempora, minima dignissimos error assumenda quisquam reiciendis nulla veritatis harum hic mollitia esse itaque aperiam, est asperiores atque eius expedita aut.</p>

      <div className={style.socialLinks}>
        <Image src="/facebook.png" width={30} height={30} />
        <Image src="/instagram.png" width={30} height={30} />
        <Image src="/youtube.png" width={30} height={30} />
      </div>
    </div>



    <div className={style.listLinks}>
      <div className={style.list}>
        <p className={style.listTitle}>Links</p>
        <Link href="#">Homepage</Link>
        <Link href="#">Blog</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </div>
      <div className={style.list}>
        <p className={style.listTitle}>Tags</p>
        <Link href="#">Style</Link>
        <Link href="#">Fashion</Link>
        <Link href="#">Coding</Link>
        <Link href="#">Travel</Link>
      </div>
      <div className={style.list}>
        <p className={style.listTitle}>Social</p>
        <Link href="#">Facebook</Link>
        <Link href="#">Instagram</Link>
        <Link href="#">Tiktok</Link>
        <Link href="#">Youtube</Link>
      </div>
    </div>

    
  </div>;
};

export default Footer;
