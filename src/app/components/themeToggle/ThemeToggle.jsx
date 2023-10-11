"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css"
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {

  const {theme, toggle} = useContext(ThemeContext);

  return (
    <div className={styles.container} 
      style={
          theme === "dark" ? {backgroundColor : "white"} : {backgroundColor: "#0f172a"}
        } 
      onClick={toggle}
    >
      <Image src="/moon.png" alt="" width={14} height={14} />

      <div className={`${styles.ball}`}
        style={
          theme === "dark" ? {left : 0, backgroundColor : "#0f172a"} : {left : "20px", backgroundColor: "white"}
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
