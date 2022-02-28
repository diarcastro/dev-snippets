import React from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Script
        id="ga-script-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2VP8FYRYN8`}
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-2VP8FYRYN8');
          `,
        }}
      />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
