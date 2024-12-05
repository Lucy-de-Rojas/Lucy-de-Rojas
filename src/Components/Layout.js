import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";

import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"


export default function Layout({children}) {
        console.log("start")

        let tag = document.dataLayer = window.dataLayer || [];
        function gtag() {
                dataLayer.push(arguments);
                console.log("middle")
        }

        gtag('js', new Date());
        gtag('config', 'G-08YXPLNCCC');

        console.log("done");






        return (<div className="flex flex-col" id="topOfPage">





                <Head>
                        <Script async scr="https://www.googletagmanager.com/gtag/js?id=G-08YXPLNCCC" />

                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />









                </Head>

                        <TopHeader />
                        {children}











                </div>);}