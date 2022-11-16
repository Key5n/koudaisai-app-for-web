import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import UserProvider from "context/userContext";
// import initAuth from "lib/initAuth";

// initAuth();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>名古屋工業大学工大祭アプリ</title>
        <meta
          name="description"
          content="第60回名古屋工業大学工大祭のスマホアプリの補助のためのweb版です。スマホアプリのご使用をお勧めします。"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
