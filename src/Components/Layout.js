import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";

import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"


export default function Layout({children}) {


        let GTM_ID = "G-08YXPLNCCC";
        // let GTM_ID = "GTM-TKS2XTSF";







        return (<div className="flex flex-col" id="topOfPage">





                <Head>
                        <GoogleTagManager gtmId={GTM_ID} />

                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />




                </Head>

                        <GoogleAnalytics gaId={GTM_ID}/>

                        <TopHeader />
                        {children}











                </div>);}