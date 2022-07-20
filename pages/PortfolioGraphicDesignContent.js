import Image from "next/image";



import styles from '../styles/graphic-design-portfolio.module.css';


import LayoutContent from "../Components/Contents/LayoutContent";

import print from '../public/Portfolio/JPEGs/CSSC Membership Booklet November 2017 FC.jpg';








export default function PortfolioGraphicDesignContent() {



    return (<LayoutContent>

<div className={styles.container}>
        <h1>Portfolio Graphic Design</h1>



        <h2>Print</h2>

<div className={styles.imageContainer}>

        <Image 
            src={print}
            width={2244}
            height={1654}
            alt="print design portfolio lucy de rojas"
               
            />

            </div>






<h2>Animations</h2>

        <Image 
            src="/Portfolio/animatedGifs/F1   Try Something New.gif"
            width={144}
            height={144}
            alt='animated gif'
            layout="responsive"
            className={styles.images}



        />

<h2>Video Production & Post Production </h2>
<h2>Powerpoint Presentaions</h2>




            </div></LayoutContent>);
}












