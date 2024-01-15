
import LayoutContent from "./LayoutContent";
import Image from "next/image";

import styles from '/styles/Home.module.css';



export default function HomePageContent () {



    return (<LayoutContent>

<h1>Welcome to my website!</h1>



<p>

Pleased to have you visiting my pages. I'm a seasoned digital designer with a humble 20 years of experience tucked under my creative belt. I take immense pleasure in collaborating with a diverse array of clients, ranging from the corporate industry titans to the local gems.
<br/><br/>
Over the years, my creative journey has entwined with household names such as Bosch, Nokia, Tk Maxx, Readers Digest, Boden, and Homebase. Working with these esteemed names has not only honed my skills but has also fueled my passion for creating designs that resonate with diverse audiences.

<br/><br/>
Up for a conversation about infusing some design enchantment into your project? How about a friendly chat over a cuppa to explore how I can breathe life into your ideas? Feel free to reach out, and let's dive into this creative journey together. I'm eager to craft something exceptional with you! Additionally, I'm here to contribute to the growth of your business through my skills and extensive experience.

</p>





{/* add images group wrapper: */}
<div className={styles.imagesGROUPWrapper}>





{/* to remove after testing:  🟥🟥🟥*/}
<Image
        src="/Media/LOGOS-Clients/FIXED/Boden.jpg"
        width={2244}
        height={1654}
        alt="animations design portfolio lucy de rojas"


    />

{/* remove after testing 🟥🟥🟥 */}
<Image
    src="/Media/LOGOS-clients/FIXED/Homebase.jpg"
    width={2560}
    height={450}
    // layout="responsive"
    alt="logo Homebase"
    className={styles.image}
    quality="100"
/>





{/* homebase: */}
<div className={styles.imageWrapper}>

<Image
    src="/Media/LOGOS-clients/FIXED/Homebase.jpg"
    width={2560}
    height={450}
    // layout="responsive"
    alt="logo Homebase"
    // className={styles.image}
    // quality="100"
/></div>




{/* readers digest: */}
<div className={styles.imageWrapper}>
<Image
    src="/Media/LOGOS-clients/FIXED/ReadersDigest.jpg"
    width={2400}
    height={894}
    // layout="responsive"
    alt="logo Readers Digest"
    // className={styles.image}
    // quality="100"
/></div>



{/* tkmaxx: */}
<div className={styles.imageWrapper}>
<Image
    src="/Media/LOGOS-clients/FIXED/TKMaxx.jpg"
    width={2560}
    height={571}
    // layout="responsive"
    alt="logo TK Maxx"
    // className={styles.image}
    // quality="100"
/></div>




{/* bosch: */}
<div className={styles.imageWrapper}>
<Image
    src="/Media/LOGOS-clients/FIXED/Bosch.jpg"
    width={736}
    height={202}
    // layout="responsive"
    alt="logo Bosch"
    // className={styles.image}
    // quality="100"
/></div>




{/* nike: */}
<div className={styles.imageWrapper}>
<Image
    src="/Media/LOGOS-clients/FIXED/Nike.jpg"
    width={375}
    height={197}
    // layout="responsive"
    alt="logo Nike"
    // className={styles.image}
    // quality="100"
/></div>


{/* nokia: */}
<div className={styles.imageWrapper}>
<Image
    src="/Media/LOGOS-clients/FIXED/NokiaLogo.jpg"
    width={800}
    height={282}
    // layout="responsive"
    alt="logo Nokia"
    // className={styles.image}
    // quality="100"
/></div>




{/* Boden: */}
<div className={styles.imageWrapper}>
<Image
    src="/Media/LOGOS-Clients/FIXED/Boden.jpg"
    width={400}
    height={200}
    // layout="responsive"
    alt="logo Boden"
    // className={styles.image}
    // quality="100"
/></div>




</div> {/* end of  technologiesWrapper */}






    </LayoutContent>);
}






















