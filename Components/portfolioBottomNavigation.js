import Link from "next/link";
import {useRouter} from 'next/router';
import { useEffect } from "react";

import styles from '../styles/portfolioBottomNavigation.module.css';






export default function PortfolioBottomNavigation() {

    let router = useRouter();


    useEffect(()=>{

        let pathname = router.pathname;
        pathname = pathname.replace(/[/]/gi,'');
        console.log(pathname);



        // for url:  portfolioWebDev
        if(pathname=='portfolioWebDev') {

            // main portfolio tab
            let portfolioPage = document.querySelector(".navigation_navigation__UdTUf :nth-child(2)");

            portfolioPage.style.backgroundColor = 'red';
            portfolioPage.style.color = 'white';




            // web portfolio tab

            let portfolioWeb = document.querySelector(".portfolioBottomNavigation_nav__Gh_dk");

            portfolioWeb.style.backgroundColor = 'red';
            portfolioWeb.style.color = 'white';



        }



        // for url:  portfolioGraphicDesign

        if(pathname == 'portfolioGraphicDesign') {


            // main portfolio tab
            let portfolioPage = document.querySelector(".navigation_navigation__UdTUf :nth-child(2)");

            portfolioPage.style.backgroundColor = 'red';
            portfolioPage.style.color = 'white';



            // gr.design portfolio tab:🟥

            let portfolioGrDesign = document.querySelector('.portfolioBottomNavigation_container__aPsY_ :nth-child(2)');

            portfolioGrDesign.style.backgroundColor = 'red';
            portfolioGrDesign.style.color = 'white';




        }



    },[]);




    return (<div className={styles.container}>


        <Link href='/portfolioWebDev'><a className={styles.nav} >Web Development</a></Link>

        <Link href='/portfolioGraphicDesign'><a className={styles.nav}>Graphic Design</a></Link>





    </div>);
}