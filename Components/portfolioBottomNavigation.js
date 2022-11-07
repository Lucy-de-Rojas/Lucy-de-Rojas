import Link from "next/link";


import styles from '../styles/portfolioBottomNavigation.module.css';






export default function PortfolioBottomNavigation() {




    return (<div className={styles.container}>


        <Link href='/portfolioWebDev'><a className={styles.nav} >Web Development</a></Link>

        <Link href='/portfolioGraphicDesign'><a className={styles.nav}>Graphic Design</a></Link>





    </div>);
}