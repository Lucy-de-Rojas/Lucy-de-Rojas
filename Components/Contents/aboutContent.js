import Image from "next/image";
import styles from '../../styles/about.module.css';
 
import LayoutContent from "./LayoutContent";



let allIcons = [
    {
        href: "/Media/IconsAndLogos/codewars.png",
        width: 920 ,
        height: 234,
        alt: 'Codewars logo',
    },
    {
        href: '/Media/IconsAndLogos/Cypress.png',
        with: 403,
        height: 135,
        alt: 'Cypress Testing Logo'

    }, {
        href: '/Media/IconsAndLogos/figma.png',
        with:999 ,
        height:478 ,
        alt: 'Figma Logo'
    }, {
        href: '/Media/IconsAndLogos/Heroku_logo.png',
        width: 2560,
        height: 716,
        alt: 'Heroku Logo'
    }, {
        href: '/Media/IconsAndLogos/jest.png',
        with: 296,
        height: 142,
        alt: 'Jest Testing logo'
    }

]






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
        quality="100"
        
        /></div>

<h1>About Lucy</h1>
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





            {
              
              allIcons.map((item)=> {
                return (<div className={styles.iconImage}>
                    <img src={item.href} width={item.width} height={item.height} className={styles.iconImage}/>
                </div>);
              })

            }











</div>


<br />
<br />
When she's not coding she loves to travel, explore and support her son in his geology and photography interests.
<br />
<br />

</p>




    </LayoutContent>);
}









