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

<h1>About</h1>
<p>Lucy is an active, techie mum and wife who loves technology and art. With professional sporting
past in athletics, her work style carries strong rule adhering, self-discipline and bringing projects to
successful finish. 



With background in graphic design she graduated from School of Code as a full stack developer focusing on techologies of ReactJS,



</p>


<iframe src="https://onedrive.live.com/embed?cid=2E3A76ABA53A4AED&resid=2E3A76ABA53A4AED%211376&authkey=APWT4FAKcb8VQBU&em=2" width="402" height="327" frameborder="0" scrolling="no"></iframe>


    </LayoutContent>);
}









