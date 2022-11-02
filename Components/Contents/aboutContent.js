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

        src= "/Media/Photos/LucyDeRojas2.png"
        width={500}
        height={500}
        layout="responsive"
        alt="Lucy de Rojas photo"
        className={styles.image}
        quality="100"

        /></div>





<h1>Lucy de Rojas</h1>

Graduate at School of Code in 2022.
<div className={styles.digitalLeaderWrapper}>




<Image
    src='/Media/SVG/SchoolOfCode_DigitalLeader_Winner_adobe_express.svg'
    width={1096}
    height={584}
    alt='School Of Code Digital Leader Winner'
    /></div>



<p>Lucy is an active, techie mum and wife who loves technology and art. With professional sporting
past in athletics, her work style carries strong rule adhering, self-discipline and bringing projects to
successful finish.




With background in graphic design she graduated from School of Code as a full stack developer.
<br />
<br />





<div className={styles.technologiesWrapper}>


    {/* <Image
        src={allIcons[0].href}
        width={allIcons[0].width}
        height={allIcons[0].height}
        alt={allIcons[0].alt}
    /> */}


    <h2 className={styles.headerTechnologies}>Favourite web techologies and tools:</h2>
            {

              allIcons.map((item)=> {
                return (
                    <img src={item.href} width={item.width} height={item.height} className={styles.iconImage}/>
                );
              })

            }




{/* designing tools: */}
<hr className={styles.hr} />
    <h2 className={styles.headerTechnologies}>Designing tools: </h2>


{iconsDesign.map((item)=> {
    return (



    <img src={item.href} alt={item.alt} width={item.width} height={item.height} className={styles.iconImageDesign} />



)})}


</div>







<br />
<br />
When she's not coding or designing she loves to travel, explore and support her son in his geology and photography interests.
<br />
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









