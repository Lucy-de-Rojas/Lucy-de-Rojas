import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";

import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"


export default function Layout({children}) {









        return (<html className="flex flex-col" id="topOfPage">
                <GoogleTagManager gtmId="G-08YXPLNCCC"/>
                <Head>
                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />
                </Head>

                        <TopHeader />
                        {children}











                </html>);}