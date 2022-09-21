import Image from "next/image";
import styles from '../../styles/about.module.css';



import LayoutContent from "./LayoutContent";

export default function AboutContent() {



    return (<LayoutContent>


<div className={styles.image}>

        <Image 
        
        src= "/Media/LucyDeRojas.jfif"
        width={500}
        height={500}
        layout="responsive"
        alt="Lucy de Rojas photo"
        className={styles.image}
        
        /></div>

<h1>About Lucy</h1>
<p>Lucy is an active, techie mum and wife who loves technology and art. With professional sporting
past in athletics, her work style carries strong rule adhering, self-discipline and bringing projects to
successful finish. 



With background in graphic design she graduated from School of Code as a full stack developer. 
<br />
<br />
TECHOLOGIES HERE (SAME AS WITH THE CV)


<br />
<br />
When she's not coding she loves to travel, explore and support her son in his geology and photography interests.
<br />
<br />

</p>




    </LayoutContent>);
}









