import type { AppProps } from 'next/app';

import '../app/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;