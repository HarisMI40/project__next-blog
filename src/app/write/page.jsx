import Image from "next/image";
import React from "react";
import style from "./write.module.css"
const page = () => {
    return(
        <div className={style.container}>
            <input placeholder="Title" className={style.inputTitle}/>
            <div className={style.editor}>
                <div className={style.button}>
                    <button>+</button>

                    <div className={`${style.add} ${style.second}`}>
                        <button className={style.addButton}>
                            <Image src="/image.png" width={16} height={16} />
                        </button>
                    </div>
                    <div className={style.add}>
                        <button className={style.addButton}>
                            <Image src="/external.png" width={16} height={16} />
                        </button>
                    </div>
                    <div className={style.add}>
                        <button className={style.addButton}>
                            <Image src="/video.png" width={16} height={16} />
                        </button>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default page;
