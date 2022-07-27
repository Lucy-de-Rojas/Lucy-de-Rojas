import Image from "next/image";


import styles from '../../styles/graphic-design-portfolio.module.css';


import LayoutContent from "./LayoutContent";


{/* //////////////////////////////////////////// */}





{/* //////////////////////////////////////////// */}






export default function PortfolioGraphicDesignContent() {



    return (<LayoutContent>

<div className={styles.container}>
        <h1>Portfolio Graphic Design</h1>



        <h2>Print</h2>

<div className={styles.imageContainer}>

        <Image 
            src='/Portfolio/JPEGs/CSSC Membership Booklet November 2017 FC.jpg'
            width={2244}
            height={1654}
            alt="print design portfolio lucy de rojas"
               
            />

            </div>


<h2>embed:</h2>
            <embed 
                src='/Portfolio/pdfs/CSSC Membership Booklet November 2017 for ONLINE USE.pdf'
                className={styles.pdf}
                />

<h2>iframe:</h2>

<iframe src='' width='500px' height='500px' />



<h2>slideshare:</h2>

<iframe 
    src="//www.slideshare.net/slideshow/embed_code/key/x3MTog1XpcJ1L1" 
    className={styles.pdf}
    
    /> 





<h2>Animations</h2>

<div className={styles.imageContainer}>

    <Image
        src="/Portfolio/animatedGifs/TrySomethingNew.gif"
        width={2244}
        height={1654}
        alt="animations design portfolio lucy de rojas"   
    
    
    />



</div>




<h2>Video Production & Post Production </h2>


<div className={styles.videoContainer}>
   
   <video 
        src="/Portfolio/Videos/CSSCStarWarsCentenaryIntroduction.mp4"  
        width="100%" 
        height="auto"
        controls
        
        />
</div>






<h2>Powerpoint Presentaions</h2>




<div className={styles.powerpointContainer}>

<iframe 
    src="//www.slideshare.net/slideshow/embed_code/key/uacSwSZs0M3A1y" 
    width="100%" 
    height="350px" 
    frameborder="0" 
    marginwidth="0" 
    marginheight="0" 
    scrolling="no" 
    // style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" 
    allowfullscreen 
    /> 









    


    
</div>




            </div></LayoutContent>);
}












