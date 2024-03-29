import React from "react";
import "../src/style/global.scss";
import "../src/components/Header/Menu/menu-styles.scss";
import "../src/components/components/ContentHeadTitlte/content-head-title.scss";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
