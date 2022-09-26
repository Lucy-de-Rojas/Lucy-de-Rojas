import Image from "next/image";
import styles from '../../styles/about.module.css';
 
import LayoutContent from "./LayoutContent";


// for web technologies:
let allIcons = [
    {
        href: '/Media/IconsAndLogos/JavaScript-logo.png',
        width: 1052,
        height: 1052,
        alt: 'Javascript Logo'
    },
    {
        href: '/Media/IconsAndLogos/React_logo.png',
        width: 5000,
        height:1679 ,
        alt: 'React logo'
    },
    {
        href: '/Media/IconsAndLogos/Nextjs-logo.png',
        width: 800,
        height: 479,
        alt:'NextJs Logo'
    },  {
        href: '/Media/IconsAndLogos/PostgreSQL-Logo.png',
        width: 799,
        height: 296,
        alt: 'PostgreSQL Logo'
    },  {
        href: '/Media/IconsAndLogos/Heroku_logo.png',
        width: 2560,
        height: 716,
        alt: 'Heroku Logo'
    },   {
        href: '/Media/IconsAndLogos/Cypress.png',
        width: 403,
        height: 135,
        alt: 'Cypress Testing Logo'

    }, {
        href: '/Media/IconsAndLogos/jest.png',
        width: 296,
        height: 142,
        alt: 'Jest Testing logo'
    },    {
        href: '/Media/IconsAndLogos/figma.png',
        width:999 ,
        height:478 ,
        alt: 'Figma Logo'
    },  {
        href: '/Media/IconsAndLogos/Trello_logo.png',
        width: 1280,
        height: 366,
        alt: 'Trello Logo'
    }, {
        href: '/Media/IconsAndLogos/python-logo.png',
        width: 476,
        height: 132,
        alt: 'Python logo'
    },  
    
    {
        href: '/Media/IconsAndLogos/GitHub-logo.jpg',
        width:3840 ,
        height: 2160,
        alt:'Github Logo'
    },
    
    
    {
        href: '/Media/IconsAndLogos/vsCode.png',
        width: 637,
        height: 179,
        alt: 'VS Code Logo'
    }, {
        href: '/Media/IconsAndLogos/scratch.png',
        width: 815,
        height: 625,
        alt: 'Scratch logo'
    },  {
        href: "/Media/IconsAndLogos/codewars.png",
        width: 920 ,
        height: 234,
        alt: 'Codewars logo',
    }
]



// for designtools:
let iconsDesign = [
    {
    href: '/Media/IconsAndLogos/Photoshop-logo.png',
    width: 640,
    height: 624,
    alt: 'Adobe Photoshop Logo'
}, {
    href:'/Media/IconsAndLogos/Indesign-logo.png',
    with: 1051,
    height: 1025,
    alt: 'Adobe Indesign Logo'
}, {
    href: '/Media/IconsAndLogos/Illustrator.-logo.png',
    width: 512,
    height: 499,
    alt: 'Adobe Illustrator Logo'
}, {
    href: '/Media/IconsAndLogos/Premiere-logo.png',
    width: 2101,
    height: 2048,
    alt: 'Adobe Premiere Logo'
}, {
    href: '/Media/IconsAndLogos/After_Effects-logo.png',
    width: 2101,
    height: 2048,
    alt: 'Adobe After Effects Logo'
}




];





export default function AboutContent() {



    return (<LayoutContent>


<div className={styles.imageWrapper}>

        <Image 
        
        src= "/Media/LucyDeRojas.jfif"
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
    src='/Media/IconsAndLogos/SchoolOfCode_DigitalLeader_Winner.png'
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
    

    
    <img src={item.href} alt={item.alt} width={item.width} height={item.height} className={styles.iconImage} />


    
)})}







</div>


<br />
<br />
When she's not coding she loves to travel, explore and support her son in his geology and photography interests.
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









