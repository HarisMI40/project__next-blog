"use client"
import React, { useState } from "react";
import styles from "./authLinks.module.css"
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function logout(){
  console.log("logouuttttt");

  signOut();
}

const AuthLinks = () => {

  const [open, setOpen] = useState(false)
  const {data, status} = useSession();

  return (
    <>
      {status === "unauthenticated" ?(
        <Link href="/login"  className={styles.link}/>
      ):(
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={`${styles.link} logout`} onClick={() => logout()}>Logout</span>
        </>
      )}

      <div className={styles.hamburger} onClick={() => setOpen((current) => !current)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
            <Link href="/">HomePage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>

            {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={() => logout()}>Logout</span>
            </>
          )}
        </div>
       )}
    </>
  );
};

export default AuthLinks;
