# 工大祭アプリweb版
予約機能と運営専用のページの実装をします

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Get Started
## ローカルサーバーの立て方
nodejsバージョン管理マネージャーの[volta](https://docs.volta.sh/guide/)を入れて
```bash
# nodeパッケージをインストールしてないならnpm installを実行
npm run dev
# or
yarn dev
```
[http://localhost:3000](http://localhost:3000)に結果がある。  
基本的には`/src/pages`ディレクトリ内のファイルを操作する。ここにあるファイルがそのままエンドポイントになる。  
例)  
`/src/pages/signup.tsx` → [http://localhost:3000/signup](http://localhost:3000/signup)  
`/src/pages/posts/1.tsx` → [http://localhost:3000/posts/1](http://localhost:3000/posts/1)

### 例外
2つだけ例外  
`/src/pages/index.tsx` → [http://localhost:3000](http://localhost:3000)  
`/src/pages/_app.tsx` → なし(このファイルはすべてのページのrootファイル的な感じで特別)

## CSSの書き方
cssはcss modulesを用いる。  
### css modulesの良いところ
- nextjsのチュートリアルに使われてた
- nextjsにbuilt-in
- 素のcssにとても近く癖が少ない
- nextjsとの相性がとてもよく他のcssフレームワークと比べて高速

### css modulesの悪いところ
- deprecatedになる可能性が高いとかなんとか  
~~ここは深く調べてなくて、有名そうな人が使ってたりするからほんとにわからん~~

## css modulesの使い方
- [わかりやすい生地](https://satoshimurata.com/css-modules-sample)
- [開発チームメンバーの記事(和訳版)](https://postd.cc/css-modules/)  
- [開発チームメンバーの記事(原本)](https://glenmaddern.com/articles/css-modules)  

基本的には[この人の書き方](https://zenn.dev/takepepe/articles/cssmodules-naming-convention)のように1つtsxファイルに対して1つの*.module.cssファイルを同じディレクトリに作成して一番最初に```import styles from "./styles.module.css"```がいいと思ってる。

### 注意
今のコードはキモイ書き方してて[/src/styles/components.module.css](https://github.com/key5n/koudaisai-app-for-web/blob/main/src/styles/components.module.css)ファイルにほとんどのcssのコード書いている。これは大変見通しが悪く、先の人の[このリポジトリ](https://github.com/takefumi-yoshii/nextjs-testing-strategy-2022)に合わせようと思ってる。

### ただのhtml, cssを書く上での落とし穴
- class属性はなく代わりにclassName属性を用いる
  どうやらこいつは元からあるものと同じ名前を使えないらしい。そういうのはちょくちょくある。例えばlabelタグのforはhtmlForでないといけない。だがclassName以外に注意すべきものはほとんどない。
- styles.module.cssファイルの中の記述を使うには
`
.(クラス名) {
  property: value;
}
`
と書き、適用させたいタグでクラス名を指定する。  
例) `.input {
  width: 50%;
  height: 50%
}`なら
import styles from "./styles.module.css"をはじめに書き、そのうえでDOMにクラス名を付与(例: <input className={styles.input} /)する。

# 以下nextjsの自動生成readme.md

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
