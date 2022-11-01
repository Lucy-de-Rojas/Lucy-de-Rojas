



// elements:
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';


import Logo from "./SVGs/Logo";


// styles:
import styles from '../styles/topHeader.module.css';








export default function TopHeader() {






    return (<div className={styles.container} >
        <Head>
        <link rel="icon" href="/newLogoNOtail.ico" />

        </Head>


{/* svg logo: */}



{/* END objectFit: svg logo */}

           <div className={styles.imageContainer}>
        <Link href="/"><a>

        <Logo />






                    <div>



                    </div>



{/* END OFlogo in svg */}


            </a></Link>
                </div>









<h2 className={styles.para}>Lucy de Rojas <br /> Web Development <br /><span className={styles.redText}> &amp; </span> Graphic Design </h2>


    </div>);
}