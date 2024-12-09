import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";
import { useEffect } from "react";

import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"


export default function Layout({children}) {

        let id = "G-FYW3VGK0DF";
        useEffect(() => {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                        dataLayer.push(arguments);
                }

                gtag('js', new Date());
                gtag('config',id);


        }, []);



        return (<div className="flex flex-col" id="topOfPage">


                <Head>

                     <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />

                </Head>


                <Script src="https://www.googletagmanager.com/gtag/js?id=G-FYW3VGK0DF" />



                        <TopHeader />
                        {children}











                </div>);}