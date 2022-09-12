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
    src="https://www.slideshare.net/slideshow/embed_code/key/z5gdvF6dCLimqg?hostedIn=slideshare&page=upload" 
    width="476" 
    height="400" 
/>

















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




        from old site:
        <iframe src="https://onedrive.live.com/embed?resid=EC6BF2592866F3BD%21133&amp;authkey=%21AB0z1gC--kIE3K4&amp;em=2&amp;wdAr=1.7777777777777777&amp;Embed=1&amp;wdEaa=1" width="100%" height="auto" frameBorder="1">This is an embedded <a href="https://office.com">Microsoft Office</a> presentation, powered by <a href="https://office.com/webapps">Office</a>.</iframe>

        
        
        
        
         



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
<iframe 
    src="https://onedrive.live.com/embed?cid=2E3A76ABA53A4AED&resid=2E3A76ABA53A4AED%211370&authkey=APcyFAXibGtr_eI&em=2" 
    className={styles.pdf} 
    
    
    
    />





    






            </div></LayoutContent>);
}












