import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Template from "components/templates/reservationTemplate";
import styles from "styles/components.module.css";

import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>名古屋工業大学工大祭アプリ</title>
        <meta
          name="description"
          content="第60回名古屋工業大学工大祭アプリのweb版です。スマホ版の使用を強くおすすめします。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Template />
      </>
    </>
  );
};

export default Index;
