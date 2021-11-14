
import React from "react"
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/index.css'
// import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
