import Image from "next/image";


import styles from '../../styles/graphic-design-portfolio.module.css';


import LayoutContent from "./LayoutContent";










export default function PortfolioGraphicDesignContent() {






    return (<LayoutContent>

<div className={styles.container}>


        <h1>Print</h1>




<h2>Membership benefits booklet:</h2>
Booklet:
<iframe 
    src="//www.slideshare.net/slideshow/embed_code/key/x3MTog1XpcJ1L1" 
    className={styles.pdf}
    
    /> 


Magazine:


<iframe 
    src="//www.slideshare.net/slideshow/embed_code/key/Hd0s6POqkuGT3P" 
    className={styles.pdf}
    
    />


    Magazine 2:

    <iframe 
        src="//www.slideshare.net/slideshow/embed_code/key/caVGWR5bkQVnEQ" 
        className={styles.pdf}
        
        
        /> 
        
        
        
        
         



<h1>Animations</h1>

<div className={styles.imageContainer}>
online advert for Guardian:
    <Image
        src="/Portfolio/animatedGifs/TrySomethingNew.gif"
        width={2244}
        height={1654}
        alt="animations design portfolio lucy de rojas"   
    
    
    />

</div>






<div className={styles.imageContainer}>
email footer:
    <Image
        src="/Portfolio/animatedGifs/MySaving+October2017.gif"
        width={620}
        height={146}
        alt="animated email footer"   
    
    
    />

</div>







<h1>Video Production<br /> & Post Production </h1>


<div className={styles.videoContainer}>
   
   <video 
        src="/Portfolio/Videos/CSSCStarWarsCentenaryIntroduction.mp4"  
        width="100%" 
        height="auto"
        controls
        
        />
</div>






<h1>Powerpoint Presentations</h1>






    <Image 
        src='/Portfolio/PowerPointsPresentation/CSSCPresentationJune2017-5pages.gif'
        width={1280}
        height={720}
        alt='powerpoint presentation 5 pages'
     />


See full presentation below:
<iframe 
    src="//www.slideshare.net/slideshow/embed_code/key/uacSwSZs0M3A1y" 
    className={styles.pdf} 
    /> 




new presentation:





    






            </div></LayoutContent>);
}












