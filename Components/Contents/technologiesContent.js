import Image from "next/image";
import styles from '../../styles/about.module.css';

import LayoutContent from "./LayoutContent";
import Lucy from "../SVGs/Lucy";



import {allIcons} from '../../data/about-page-data';
import {iconsDesign} from '../../data/about-page-data';





export default function TechnologiesContent() {



    return (<LayoutContent>

{/* photo Lucy: */}
{/* <div className={styles.imageWrapper}>
        <Image

        src= "/Media/Photos/LucyDeRojas2.png"
        width={500}
        height={500}
        layout="responsive"
        alt="Lucy de Rojas photo"
        className={styles.image}
        quality="100"
        /></div> */}





<h1>Technologies and Tools</h1>

<p>

I’m an active, techie mum and wife who loves technology and art. With a professional sporting past in athletics, my work style carries strong rule adhering, self-discipline and bringing projects to successful finish.
<br /><br />

I constantly explore options to reduce expenses by setting up and maintaining my own servers. One of my areas of expertise is addressing clients’ online visibility and discoverability issues through the implementation of a well-crafted SEO strategy. To effectively manage a project, I prioritize tasks using an agile approach that begins with developing a minimum viable product. The success of this approach hinges on my ability to identify and focus on the most important features first. Continuous learning holds significant value in my life.


<br /><br />

<div className={styles.technologiesWrapper}>


    {/* <Image
        src={allIcons[0].href}
        width={allIcons[0].width}
        height={allIcons[0].height}
        alt={allIcons[0].alt}
    /> */}


    <h2 className={styles.headerTechnologies}>Web techologies and tools:</h2>
            {

              allIcons.map((item, index)=> {
                return (
                    <img src={item.href} width={item.width} height={item.height} className={styles.iconImage} key={index}/>
                );
              })

            }




{/* designing tools: */}
<hr className={styles.hr} />
    <h2 className={styles.headerTechnologies}>Designing tools: </h2>


{iconsDesign.map((item, index)=> {
    return (



    <img src={item.href} alt={item.alt} width={item.width} height={item.height} className={styles.iconImageDesign} key={index} />



)})}


</div>





<p>
    Some of the content on these pages has been helped with ChatGPT as part of experiment. Yes, machines can sometimes write better content than us humans. Together we can create some awesome stuff.
</p>
<Image
    src="/Media/Photos/chatAndArnold.jpg"
    width={900}
    height={416}
    alt=""
    layout="responsive"  />




{/*
<br />
<br />
When I&apos;m not coding or designing I love to travel, explore and support our son in his geology and photography interests.
<br />
<br /> */}

</p>



{/* bottom page image Benji: */}
{/* <div>

<Image
    src='/Media/Photos/FoggintorQuarryDartmoor.jpg'
    width={2048}
    height={957}
    alt='Foggintor Quarry Dartmoor'

/></div> */}


    </LayoutContent>);
}









