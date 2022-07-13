



// elements:
import Image from "next/image";
import Link from "next/link";




// styles:
import styles from '../styles/topHeader.module.css';








export default function TopHeader() {






    return (<div className={styles.container} >





           <div className={styles.imageContainer}>
        <Link href="/"><a>

            
            <Image
                src="/DonQuiDesigns-logo.png"
                width={500}
                height={402} 
                alt="logo"
                />
                      
            </a></Link>
                </div>




 
 



<h2 className={styles.para}>Lucy de Rojas <br /> Web Development <br /><span className={styles.redText}> &amp; </span> Graphic Design </h2>


    </div>);
}