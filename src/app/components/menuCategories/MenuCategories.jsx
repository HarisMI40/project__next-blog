import React from "react";
import styles from "./menuCategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
    const data = [
        {_id : "1", title : "coding"},
        {_id : "2", title : "fashion"},
        {_id : "3", title : "style"},
        {_id : "4", title : "travel"},
        {_id : "5", title : "culture"},
        {_id : "6", title : "food"},
      ]
      return (
        <div className={styles.categories}>
            {data?.map(item => (

                <Link
                    href={"/blog?cat=" + item.title}
                    className={`${styles.category} ${styles[item.title]}`}
                    key={item._id}
                >
                    {item.title}
                </Link>

                
            ))}
        </div>
      );
};

export default MenuCategories;
