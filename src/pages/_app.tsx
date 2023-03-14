import MainMenu from '@/components/MainMenu'
import Nav from '@/components/Nav'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';

export default function App({ Component, pageProps }: AppProps) {
  const Bg = dynamic(() => import("../components/BackgroundHO"), { ssr: false });

  return (
    <>
      <Bg />
      <Nav />
      <MainMenu />
      <Component {...pageProps} />
    </>
  )
}
