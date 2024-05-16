import Image from "next/image";
import styles from '../../styles/about.module.css';

import LayoutContent from "./LayoutContent";
import Lucy from "../SVGs/Lucy";



import {allIcons} from '../../data/about-page-data';
import {iconsDesign} from '../../data/about-page-data';





export default function AboutContent() {



    return (<LayoutContent>


<div className={styles.imageWrapper}>

        <Image

        src= "/Media/Photos/Lucy de Rojas.png"
        width={500}
        height={500}
        layout="responsive"
        alt="Lucy de Rojas photo"
        className={styles.image}
        quality="100"


        /></div>





<h1>Lucy de Rojas</h1>

<p>

I’m an active, techie mum and wife who loves technology and art. With a professional sporting past in athletics, my work style carries strong rule adhering, self-discipline and bringing projects to successful finish.
<br /><br />

Exploring into the <b>intricacies of branding</b>, my understanding extends beyond the surface of visuals to grasp its holistic impact on business growth. Employing a strategic approach, I align branding seamlessly with business objectives, cultivating a unified and impactful market presence.
<br /><br />

Shifting focus to <b>business models</b>, my forte lies in unraveling their intricacies, spanning revenue streams, cost structures, and value propositions. This expertise empowers me to scrutinize and enhance models for optimal efficiency, making vital contributions to sustainable growth and profitability.
<br /><br />

Setting me apart is an unwavering commitment to <b>continuous learning</b>. In tune with the dynamic business landscape, I remain abreast of trends, technologies, and strategies. This dedication underscores a growth mindset and showcases adaptability, vital assets in navigating a competitive environment.

<br /><br />


<hr className={styles.hr} />



When I&apos;m not engaged in the digital sphere, <b>I love to</b> travel, explore and support our son in his geology and photography interests.
<br />

</p>







{/* bottom page image: */}
<div>

<Image
    src='/Media/Photos/FoggintorQuarryDartmoor.jpg'
    width={2048}
    height={957}
    alt='Foggintor Quarry Dartmoor'

/>
    </div>


    </LayoutContent>);
}









