import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="identifier-url" content="https://www.ow.finance/" />
        <meta name="title" content="Openworld #DeFi, #DEX" />
        <meta
          name="description"
          content="OpenWorld is a decentralize derivative exchange"
        />
        <meta
          name="abstract"
          content="OpenWorld is a decentralize derivative exchange"
        />
        <meta name="keywords" content="ow, openworld, defi, dex" />
        <meta name="author" content="OpenWorld" />
        <meta name="revisit-after" content="15" />
        <meta name="language" content="EN" />
        <meta
          name="copyright"
          content="Copyright© 2021-2023. All Rights Reserved"
        />
        <meta name="robots" content="All" />
        <meta property="og:image" content="img/share-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Openworld #DeFi, #DEX" />
        <meta
          name="twitter:description"
          content="OpenWorld is a decentralize derivative exchange"
        />
        <meta name="twitter:image" content="img/share-image.webp" />
      </Head>
      <title>OpenWorld #DeFi #DEX</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
