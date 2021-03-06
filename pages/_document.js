/**
 * @file _document
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */

import * as React from "react";

import Document, { Head, Html, Main, NextScript } from "next/document";

import { assertAssetPrefix } from "lib/utils";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />

          <meta property="og:url" content="https://p0kem0nemerald.github.io/" />
          <meta property="og:title" content="LeoTube" />
          <meta property="og:type" content="article" />
          <meta property="og:description" content="LetTube" />
          <meta
            property="og:image"
            content={assertAssetPrefix("/img/wallpaper.png")}
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@p0kem0nEmerald" />
          <meta name="twitter:creator" content="@p0kem0nEmerald" />
          <meta name="twitter:title" content="LeoTube" />
          <meta
            name="twitter:image"
            content={assertAssetPrefix("/img/brand/apple-icon.png")}
          />

          <meta property="og:site_name" content="leoTube" />
          <meta property="og:locale" content="ja_JP" />
          <link
            rel="shortcut icon"
            href={assertAssetPrefix("/img/brand/apple-icon.png")}
          />

          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={assertAssetPrefix("/img/brand/apple-icon.png")}
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
