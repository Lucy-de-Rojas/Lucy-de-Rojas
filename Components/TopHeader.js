



// elements:
import Image from "next/image";
import Link from "next/link";




// styles:
import styles from './topHeader.module.css';








export default function TopHeader() {






    return (<div>

   <div className={styles.container}>




<Link href="/">
<a>
    
<div className={styles.logo} >

<Image
    src='/DonQuiDesigns-logo.png' 
    width="500"
    height="402"
    layout="responsive"
    className={styles.image}
    alt="logo"
/>

</div>
    
    </a></Link>
 










<p>Luy de Rojas - Web Development & Graphic design</p>
<p>Luy de Rojas - Web Development & Graphic design</p>

</div>

    </div>);
}