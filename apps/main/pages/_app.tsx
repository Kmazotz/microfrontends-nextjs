import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import CustomToastComponent from '../components/custom.toast.component';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>[ QUEST ] — PORTAL®</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <CustomToastComponent />
    </>
  );
}

export default CustomApp;