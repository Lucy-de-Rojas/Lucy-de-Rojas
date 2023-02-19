
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












{/* LACEYS: */}
<section>
<h2>1. Laceys website</h2>


<p>
Working with the Laceys family was trully amazing experience where seeing how seven generations keep local business running is unprecedented. And did I mention incredible ice creams?
</p>

<Link href="https://lucy-de-rojas.vercel.app//portfolioWebDev#laceys">  &gt;&gt;  Link  to Laceys Farm Show section &lt;&lt; </Link>

<Image
    src="/Media/screenshots/laceys-site.jpg"
    width={900}
    height={933}
    alt="laceys website screenshot"
    layout="responsive"

/>
</section>









{/* MENU13: */}
<section>
<h2>2. Menu13</h2>
<p>This project tops my coding experience. The reason behind this is as this was my first React / Next JS library. And it&apos;s free to all to use.</p>
<Link href="https://lucy-de-rojas.vercel.app//portfolioWebDev#menu13">  &gt;&gt;  Link  to Menu13 &lt;&lt; </Link>



<Image
    src="/Media/screenshots/menu13-site.jpg"
    width={900}
    height={614}
    alt="Menu13 screenshot"
    layout="responsive"

/>
</section>















{/* VIDEO: */}
<h2>3. Centenary celebration video</h2>
<p>
Seeing a video, I collaborated on, to be shown on cinema size screen is unbelievalbe experience. With the size of the projection and the sound as well it&apos;s uncomparable to pc screen.
</p>
<Link href="https://lucy-de-rojas.vercel.app/portfolioGraphicDesign#video">  &gt;&gt;  Link to video section &lt;&lt; </Link>

<video
        src="/Portfolio/Videos/CSSCStarWarsCentenaryIntroduction.mp4"
        width="100%"
        height="auto"
        controls

        />



    </LayoutContent>);
}

























