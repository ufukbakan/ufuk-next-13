import MainMenu from '@/components/MainMenu'
import Nav from '@/components/Nav'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const Bg = dynamic(() => import("../components/common/BackgroundHO"), { ssr: false });

  return (
    <>
      <Head>
        <meta name="author" content="Ufuk Bakan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <Bg />
      <Nav />
      <MainMenu />
      <Component {...pageProps} />
    </>
  )
}
