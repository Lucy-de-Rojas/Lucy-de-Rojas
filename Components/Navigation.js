import Link from 'next/link';




import styles from '../styles/navigation.module.css';




export default function Navigation() {






    return (<div className={styles.navigation}>

            <Link href="/about" >
            <a className={styles.nav}> About</a>
             </Link>


             <Link href="/portfolio">
             <a className={styles.nav}>Portfolio </a>
             </Link>



             <Link href="/contact">
             <a className={styles.nav}>Contact</a>
             </Link>
            







    </div>);
}














