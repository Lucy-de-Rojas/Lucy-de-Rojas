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

<p>Lucy is an active, techie mum and wife who loves technology and art. With professional sporting
past in athletics, her work style carries strong rule adhering, self-discipline and bringing projects to
successful finish.



<br /><br />

Having worked in both technological and artistic industries Lucy has gathered a blend of intertwining skills.
Whilst working as a web developer she learned importance of problem-solving, collaboration and working independently. During projects involving video editing, visual effects and motion graphics she understood the value of time-management and adaptability. And in graphic and print design she understood the cost-effectiveness and clear communication.
<br /><br />
In technology sector her strongest qualities are pattern recognition, analytical thinking and strategical planning.
In graphic design these are typography, video editing and visual layout.

<br /><br />

Lucy loves learning new skills and putting these to practice. She is looking ahead to new opportunities and experiences that her skills will bring her.

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







<br />
<br />
When she&apos;s not coding or designing she loves to travel, explore and support her son in his geology and photography interests.
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









