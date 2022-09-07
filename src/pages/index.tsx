import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>名古屋工業大学工大祭アプリ</title>
        <meta
          name="description"
          content="第60回名古屋工業大学工大祭アプリのweb版です。スマホ版の使用を強くおすすめします。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="posts/tickets">リンク</Link>
      </main>
    </div>
  );
};

export default Home;
