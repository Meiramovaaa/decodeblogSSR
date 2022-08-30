import '../public/styles/all.css'
import React from "react"

import { wrapper } from "../store";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
