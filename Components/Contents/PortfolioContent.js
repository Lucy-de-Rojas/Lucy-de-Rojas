
import Image from "next/image";
import Link from "next/link";



import LayoutContent from "./LayoutContent";
import styles from '../../styles/portfolioContent.module.css';









export default function PortfolioContent() {



    return (<LayoutContent>

        <h1>Best of Both </h1>



{/* BEST OF BOTH:   */}
<div className={styles.imageWrapper}>

        <Image
            src="/Media/Photos/BestOfBoth.jpg"
            width={900}
            height={671}
            alt="best of both photo of hovis bread"
            layout="responsive"


            />
            </div>





            <p>
In this section I have decided to take 3 top picks from both worlds, from print design and web development.
        </p>



<h2>1. Menu13</h2>

<h2>2. Laceys website</h2>
<h2>3. Centenary celebration video</h2>





    </LayoutContent>);
}

























