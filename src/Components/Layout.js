import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";

import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"


export default function Layout({children}) {









        return (<div className="flex flex-col" id="topOfPage">
                <GoogleTagManager gtmId="G-08YXPLNCCC"/>
                <GoogleTagManager gtmId="GTM-TKS2XTSF" />


                <Head>
                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />









                </Head>

                        <TopHeader />
                        {children}











                </div>);}