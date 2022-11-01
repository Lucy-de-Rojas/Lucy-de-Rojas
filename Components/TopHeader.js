



// elements:
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';



// styles:
import styles from '../styles/topHeader.module.css';








export default function TopHeader() {






    return (<div className={styles.container} >
        <Head>
        <link rel="icon" href="/newLogoNOtail.ico" />

        </Head>





           <div className={styles.imageContainer}>
        <Link href="/"><a>


        {/* logo in svg: */}

                 <Image
                        src="/Media/SVG/NEW-logo_adobe_express.svg"
                        width={2065}
                        height={1595}
                        alt="don qui designs logo"

                    />



{/* END OFlogo in svg */}


            </a></Link>
                </div>









<h2 className={styles.para}>Lucy de Rojas <br /> Web Development <br /><span className={styles.redText}> &amp; </span> Graphic Design </h2>


    </div>);
}