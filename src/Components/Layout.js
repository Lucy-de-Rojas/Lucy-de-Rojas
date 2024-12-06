import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";

import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"


export default function Layout({children}) {

        let id = "G-DTGHE5XWP7";



        return (<div className="flex flex-col" id="topOfPage">


                <GoogleTagManager gtmId={id} />
                <GoogleAnalytics gaId={id} />

<script async src="https://www.googletagmanager.com/gtag/js?id=G-DTGHE5XWP7"></script>

<script>{
        `window.dataLayer = window.dataLayer || [];
        function gtag(){
        dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${id});`
  }
</script>






                <Head>

                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />




                </Head>


                        <TopHeader />
                        {children}











                </div>);}