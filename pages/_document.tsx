import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
          <meta
            name="title"
            content="Discord Data Package Viewer and Explorer"
          />
          <meta
            name="description"
            content="Discord Stats will help you to explore and view Discord Data Packages."
          />
          <meta
            name="keywords"
            content="discord stats, discord, discord stats viewer"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://discordpackage.com" />
          <meta
            property="og:title"
            content="Discord Data Package Viewer and Explorer"
          />
          <meta
            property="og:description"
            content="Discord Stats will help you to explore and view Discord Data Packages."
          />
          <meta
            property="og:image"
            content="https://discordpackage.com/favicon.ico"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://discordpackage.com" />
          <meta
            property="twitter:title"
            content="Discord Data Package Viewer and Explorer"
          />
          <meta
            property="twitter:description"
            content="Discord Stats will help you to explore and view Discord Data Packages."
          />
          <meta
            property="twitter:image"
            content="https://discordpackage.com/favicon.ico"
          />
        </>
        <noscript>Please enable JavaScript to view the site</noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
