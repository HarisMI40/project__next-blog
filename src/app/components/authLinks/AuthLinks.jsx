"use client"
import React, { useState } from "react";
import styles from "./authLinks.module.css"
import Link from "next/link";
const AuthLinks = () => {

  const status = "Authenticated";
  const [open, setOpen] = useState(false)
  

  return (
    <>
      {status === "notauthenticated" ?(
        <Link href="/login"  className={styles.link}/>
      ):(
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={`${styles.link} logout`}>Logout</span>
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

            {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
       )}
    </>
  );
};

export default AuthLinks;
