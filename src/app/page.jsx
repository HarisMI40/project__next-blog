import Link from "next/link";
import styles from "./homepage.module.css";
import { Featured, CategoryList, CardList, Menu } from "./components";

export default function Home() {
  return <div className={styles.container}>
    <Featured />
    <CategoryList />
    <div className={styles.content}>
      <CardList />
      <Menu />
    </div>
  </div>;
}