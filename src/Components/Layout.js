import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";
import { useEffect } from "react";

import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"


export default function Layout({children}) {



        return (<div className="flex flex-col w-full bg-white p-0" id="topOfPage">


                <Head>

                     <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />

                </Head>


                <Script src="https://www.googletagmanager.com/gtag/js?id=G-FYW3VGK0DF" />



                        <TopHeader />
                        {children}











                </div>);}