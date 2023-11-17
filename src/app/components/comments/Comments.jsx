import React from "react";
import style from "./comment.module.css"
import Image from "next/image";
const Comments = () => {
return (
    <div className={style.container}>
        <h1 className={style.titleComment}>Comments</h1>
        <div className={style.formComment}>
            <textarea className={style.textarea} placeholder="Tuliskan Komentar ...." />
            <button className={style.button}>Kirim</button>
        </div>

        <div className={style.comments}>
            <div className={style.comment}>
                <div className={style.userAvatar}>
                    <Image src="/p1.jpeg" width={30} height={30}/>
                    <div className={style.userAvatarProfil}>
                        <h1 className={style.name}>John Doe</h1>
                        <h4 className={style.date}>22.03.2023</h4>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores inventore culpa molestias? Dolor corrupti, alias reprehenderit voluptatibus minima unde cumque provident architecto beatae quisquam sapiente dignissimos neque. Porro, enim?</p>
            </div>
            <div className={style.comment}>
                <div className={style.userAvatar}>
                    <Image src="/p1.jpeg" width={30} height={30}/>
                    <div className={style.userAvatarProfil}>
                        <h1 className={style.name}>John Doe</h1>
                        <h4 className={style.date}>22.03.2023</h4>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores inventore culpa molestias? Dolor corrupti, alias reprehenderit voluptatibus minima unde cumque provident architecto beatae quisquam sapiente dignissimos neque. Porro, enim?</p>
            </div>
            <div className={style.comment}>
                <div className={style.userAvatar}>
                    <Image src="/p1.jpeg" width={30} height={30}/>
                    <div className={style.userAvatarProfil}>
                        <h1 className={style.name}>John Doe</h1>
                        <h4 className={style.date}>22.03.2023</h4>
                    </div>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores inventore culpa molestias? Dolor corrupti, alias reprehenderit voluptatibus minima unde cumque provident architecto beatae quisquam sapiente dignissimos neque. Porro, enim?</p>
            </div>
        </div>
    </div>
    );
};

export default Comments;
