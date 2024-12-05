import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";

import {GoogleAnalytics} from "@next/third-parties/google"


export default function Layout({children}) {







        return (<div className="flex flex-col" id="topOfPage">
                <Head>

                        <GoogleAnalytics gaId="G-08YXPLNCCC"/>






                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />



                </Head>

                        <TopHeader />
                        {children}











                </div>);}