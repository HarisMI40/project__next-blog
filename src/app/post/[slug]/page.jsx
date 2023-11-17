import React from "react";
import style from "./singlePage.module.css"
import Image from "next/image";
import { Menu } from "@/app/components";
import Comments from "@/app/components/comments/Comments";
import { notFound } from "next/navigation";


const getData = async (slug) => {
    // return "this Slug is : " + slug
    // return {data: "data"}
    try{
    const res = await fetch('http://localhost:3000/api/posts/' + slug)
    console.log("status : " + res.status)

    if(res.status !== 200){
        throw new Error("ada kesalahan pada fetching data")
    }


    console.log("status : " + res.status)
    // console.log(res.json())
    return res.json();
    }catch(error){
        console.log("====== ERRORRRR =========");
        console.log(error)
    }
}


const SinglePage = async ({params}) => {
    const {slug} = params;
    // return
    const post = await getData(slug);
    if(!post) {
        return notFound()
    }
    
  return (
    <div className={style.container}>

        <div className={style.containerHeader}>

            <div className={style.containerTitle}>

                <div className={style.title}>
                    <h1 className={style.titleText}>{post.title}</h1>
                </div>

                <div className={style.profilContainer}>
                    <div className={style.imageProfilContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={style.imageProfil}/>
                    </div>
                    <div className={style.descProfilContainer}>
                        <p className={style.name}>John Doe</p>
                        <p className={style.date}>25 April 2023</p>
                    </div>
                </div>
            
            </div>


            <div className={style.containerImageTitle}>
                {/* Lorem */}
                <Image src={`/${post.img}`} alt="" fill className={style.imageTitle}/>
            </div>
        </div>





        <section className={style.main}>
            <div className={style.post}>
                <div className={style.containerDescription} dangerouslySetInnerHTML={{ __html: post?.desc }}></div>

                <div className={style.comment}>
                    <Comments />
                </div>
            </div>
            <Menu />
        </section>
    </div>
  );
};

export default SinglePage;
