import Image from "next/image";
import Link from "next/link";
import GithubIcon from "./SVGs/GithubIcon";


import styles from '../styles/footer.module.css';




export default function Footer() {


    return (

    <div className={styles.wrapper}>



<hr />

    <div className={styles.container}>


<div className={styles.containerIcon}>
    <Link href="https://github.com/Lucy-de-Rojas"><a target="_blank">



            <Image
            src='/Media/SVG/githuRED.svg'
            width={100}
            height={100}
            alt='git hub logo'
            />








            </a></Link>
            </div>




            <div className={styles.containerIcon}>
            <Link href="https://www.linkedin.com/in/lucyderojas/"><a target="_blank">
            <Image
            src='/Media/SVG/LinkedInRED_adobe_express.svg'
            width={100}
            height={100}
            alt='git hub logo'
            />
            </a></Link>

             </div>








        {/* codewars: */}
             <div className={styles.containerIcon}>
            <Link href="https://www.codewars.com/users/ldrojas"><a target="_blank">
            <Image
            src='/Media/codewarsLogo.svg'
            width={100}
            height={100}
            alt='cadewars logo'
            />
            </a></Link>

             </div>






             </div>

    </div>);
}




