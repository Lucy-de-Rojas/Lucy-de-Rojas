import Image from "next/image";




import styles from '../styles/footer.module.css';




export default function Footer() {


    return (
    
    <div className={styles.wrapper}>

    
    
<hr />
    
    <div className={styles.container}>



<div className={styles.containerIcon}>

        <Image
            src='/Media/githuREDb.png'
            width={100}
            height={100}
            alt='git hub logo'
            />
            </div>




            <div className={styles.containerIcon}>        <Image
            src='/Media/LinkedInRED.png'
            width={100}
            height={100}
            alt='git hub logo'
             />

             </div>


        
        
 




             </div>

    </div>);
}




