import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";

import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"


export default function Layout({children}) {


        let GTM_ID = "G-08YXPLNCCC";







        return (<div className="flex flex-col" id="topOfPage">





                <Head>
                        <Script async scr="https://www.googletagmanager.com/gtag/js?id=G-08YXPLNCCC" />

                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />

                        <GoogleAnalytics gaId="G-08YXPLNCCC"/>









                </Head>

                <Script id="gtm" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>

                        <TopHeader />
                        {children}











                </div>);}