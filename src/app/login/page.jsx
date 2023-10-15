'use client'

import React from 'react'
import style from "./login.module.css";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const page = () => {

    const router = useRouter();
    const {status} = useSession();

    if(status == "loading"){
        return <div>Loading ...</div>
    }

    if(status == "authenticated"){
        router.push("/")
    }

  return (
    <div className={style.container}>
        <div className={style.login}>
            <div className={style.chooseLogin} onClick={() => signIn("google")}>
                Google
            </div>
            <div className={style.chooseLogin}>
                Email
            </div>
            <div className={style.chooseLogin}>
                Github
            </div>
        </div>
    </div>
  )
}

export default page