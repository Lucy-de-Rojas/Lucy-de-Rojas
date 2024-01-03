import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';



import styles from '../styles/navigation.module.css';



export default function Navigation() {

    let route = useRouter();



// controlling active = highlighted menu:
    useEffect(()=>{
        let pathname = route.pathname;
        pathname = pathname.replace(/[/]/gi, '');
        console.log('pathname:>>>>',pathname);



        // about page:
        if(pathname=='about') {

            let aboutPage = document.querySelector(".navigation_navigation__UdTUf :nth-child(1)");

            aboutPage.style.backgroundColor = 'red';
            aboutPage.style.color = 'white';
        }

        if(pathname=='portfolio') {
            let portfolioPage = document.querySelector(".navigation_navigation__UdTUf :nth-child(2)");

            portfolioPage.style.backgroundColor = 'red';
            portfolioPage.style.color = 'white';
        }

        if(pathname == 'contact') {

            let contactPage = document.querySelector(".navigation_navigation__UdTUf :nth-child(3)");

            contactPage.style.backgroundColor = 'red';
            contactPage.style.color = 'white';
        }


        // for video page:
        if( pathname== 'videos') {
            let portfolioPage = document.querySelector(".navigation_navigation__UdTUf :nth-child(2)");

            portfolioPage.style.backgroundColor = 'red';
            portfolioPage.style.color = 'white';

        }




    },[]);















    return (<div className={styles.navigation}>

            <Link href="/about"  >
            <a className={styles.nav} id={styles.about} > About</a>
             </Link>


             <Link href="/portfolio" >
             <a className={styles.nav}  id={styles.portfolio}>Portfolio </a>
             </Link>



             <Link href="/contact" >
             <a className={styles.nav} id={styles.contact}>Contact</a>
             </Link>








    </div>);
}














