import '../styles/globals.css'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
      <>
          <Script
              strategy="afterInteractive"
              src="https://www/googletagmanager.com/gtag/js?id=G-8JP4EJGTNV"
          ></Script>
          <Component {...pageProps} />
          <Script id='google-analytics' strategy='afterInteractive'>
              {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8JP4EJGTNV')`}
          </Script>
      </>
  );
}
