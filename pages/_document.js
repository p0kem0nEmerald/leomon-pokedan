import * as React from "react";

import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />

          <meta property="og:url" content="ページのURL" />
          <meta property="og:title" content="LeoTube" />
          <meta property="og:type" content="article" />
          <meta property="og:description" content="LetTube" />
          <meta property="og:image" content="/img/wallpaper.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@p0kem0nEmerald" />
          <meta property="og:site_name" content="leoTube" />
          <meta property="og:locale" content="ja_JP" />
          <link rel="shortcut icon" href="/img/brand/apple-icon.png" />

          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/brand/apple-icon.png"
          />
        </Head>
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
