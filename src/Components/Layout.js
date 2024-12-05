import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";

import {GoogleAnalytics} from "@next/third-parties/google"


export default function Layout({children}) {


        function handlePageLoad() {

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-08YXPLNCCC');

        }







        return (<div className="flex flex-col" id="topOfPage">
                <Head>


                        <Script src="https://www.googletagmanager.com/gtag/js?id=G-08YXPLNCCC"  async onLoad={handlePageLoad}/>






                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />



                </Head>

                        <TopHeader />
                        {children}











                </div>);}