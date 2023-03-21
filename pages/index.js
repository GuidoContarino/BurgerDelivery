import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured/Featured";
import BurgerList from "../components/BurgerList/BurgerList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BigPons</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Featured />
      <BurgerList />
    </div>
  );
}
