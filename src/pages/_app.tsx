import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import initAuth from "lib/initAuth";

initAuth();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>名古屋工業大学工大祭アプリ</title>
        <meta
          name="description"
          content="第60回名古屋工業大学工大祭の予約管理とアプリのです。スマホ版の使用を強くおすすめします。"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
