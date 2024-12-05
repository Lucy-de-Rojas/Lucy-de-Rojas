import Head from "next/head";
import Script from "next/script";
import TopHeader from "./TopHeader";



export default function Layout({children}) {


  function handlePageLoad() {

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-08YXPLNCCC');

      }






        return (<div className="flex flex-col" id="topOfPage">
                <Head>




{/* google analytics: Google tag (gtag.js) */}
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-08YXPLNCCC"  onLoad={handlePageLoad}  />



                        <link rel="icon" href="/Media/IconsAndLogos/newLogoNOtail.ico" />



                </Head>

                        <TopHeader />
                        {children}











                </div>);}