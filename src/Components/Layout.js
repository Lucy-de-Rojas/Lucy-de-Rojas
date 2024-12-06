import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";

import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"


export default function Layout({children}) {



        return (<div className="flex flex-col" id="topOfPage">


                <GoogleTagManager gtmId="G-DTGHE5XWP7" />
                <GoogleAnalytics gaId="G-DTGHE5XWP7" />
{/*
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DTGHE5XWP7"></script>

<script>{
        `window.dataLayer = window.dataLayer || [];
        function gtag(){
        dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DTGHE5XWP7');`
  }
</script> */}






                <Head>

                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />




                </Head>


                        <TopHeader />
                        {children}











                </div>);}