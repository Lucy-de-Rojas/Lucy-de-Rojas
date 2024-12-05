import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";

import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"


export default function Layout({children}) {







        return (<div className="flex flex-col" id="topOfPage">





                <Head>
                        <Script async scr="https://www.googletagmanager.com/gtag/js?id=G-08YXPLNCCC" />

                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />

                        <GoogleAnalytics gaId="08YXPLNCCC"/>









                </Head>

                        <TopHeader />
                        {children}











                </div>);}