import "@/styles/globals.css";
import Script from "next/script";
import { useReportWebVitals} from 'next/web-vitals'


export default function App({ Component, pageProps }) {

  useReportWebVitals((metric) => {
    console.clear();
    console.log("🔴",metric);
  });


  return <Component {...pageProps} />;
}
