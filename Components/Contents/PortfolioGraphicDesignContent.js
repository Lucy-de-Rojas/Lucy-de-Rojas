import Image from "next/image";
import styles from '../../styles/graphic-design-portfolio.module.css';
import LayoutContent from "./LayoutContent";

import Booklet from "../SlideShows/Booklet";
import PowerPoint from "../SlideShows/PowerPoint";








export default function PortfolioGraphicDesignContent() {






    return (<LayoutContent>

<div className={styles.container}>














{/* ScannAppeal logo Animation */}
<h2>Animations: <br /> <span className={styles.quote}> NHS - Scannappeal logo animation</span></h2>
<p>From drafting ideas to use in video content for online platforms.
    <br />







</p>

<div className={styles.animatedGif}>
    <Image
        src="/Media/ScannAppeal/LogoIntro.gif"
        width={1920}
        height={1080}
        alt="ScannAppeal logo Animation"


    />

</div>











{/* Video - Xmas Carols Scannappeal: */}
<h2 id="video">Video Production<br /> & Visual Effects: <br />
<span className={styles.quote}>
NHS Scannappeal Xmas Carols 2023
</span>


</h2>
    <p>

        Video editing, visual effects and motion graphics (introduction and closing section). This lovely little gem is highlighting efforts of Scannappeal volunteers to raise funds for much needed hospital equipment in Buckinghamshire.


    </p>

<div className={styles.videoContainer}>
      <video
        src="/Media/ScannAppeal/ScannAppealChristmasCarols.mp4"
        width="100%"
        height="auto"
        controls

        />
</div>










{/* powerpoint presentation with NESS: */}
<h2>Powerpoint presentations: <br />
<span className={styles.quote}>
NESS Eco Products
</span>
</h2>
    <p>Presentation used for online meeting with potential distributors. It contains 15 slides.
    <br />
          </p>



          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQbHQLPVrJuHWZY_8liKO2qj28VBJ-u8LriftaVY3IJ6NM_gESfK8BXQH1CAMhMHTngcqU-mlYUUkrB/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="500" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" />








    <h2>3D print: <br />
<span className={styles.quote}>
CSSC Volunteer Awards Badge
</span>
</h2>

<p>
Test sample made is stainless steel. Final print in silver not produced due to lack of detail.

</p>



{/* put photo of the 3D printed badge: */}
<div className={styles.animatedGif}>
    <Image
        src="/Media/Photos/3D-printed-volunteer-award-badge-CSSC-back-and-front.jpg"
        width={800}
        height={559}
        alt="3D printed volunteer award badge CSSC front"
    />


</div>



<h2>Print design:
    <br />
    <span className={styles.quote}>
     Membership Benefits booklet:
     </span></h2>



<p>24 page booklet in high gloss finish. Design work included intial document setup,
    flatplan management and printing arrangements.
    Software used: Indesign, Photoshop and Illustrator. <br />
     <span className={styles.author}> Have a flip through and see if can spot the
    "infamous" pizza chart?
    </span>


     </p>

     <Booklet />




            </div></LayoutContent>);
}












