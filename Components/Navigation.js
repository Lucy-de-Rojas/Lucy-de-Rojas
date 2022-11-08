import Link from 'next/link';




import styles from '../styles/navigation.module.css';



export default function Navigation() {



    const handleClick = (event)=> {
        console.clear();


        event.target.style.backgroundColor = 'rgb(255, 0, 0)';




        console.log('clicked:::>', event.target.innerHTML);

    }














    return (<div className={styles.navigation}>

            <Link href="/about"  >
            <a className={styles.nav} id={styles.about}  onClick={handleClick}> About</a>
             </Link>


             <Link href="/portfolio" >
             <a className={styles.nav} onClick={handleClick}>Portfolio </a>
             </Link>



             <Link href="/contact" >
             <a className={styles.nav} onClick={handleClick}>Contact</a>
             </Link>








    </div>);
}














