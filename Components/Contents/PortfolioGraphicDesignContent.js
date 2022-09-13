import Image from "next/image";
import styles from '../../styles/graphic-design-portfolio.module.css';
import LayoutContent from "./LayoutContent";










export default function PortfolioGraphicDesignContent() {






    return (<LayoutContent>

<div className={styles.container}>


   




<h2>Print design - Membership Benefits booklet:</h2>
<p>24 page booklet in high gloss finish. Design work included intial document setup, 
    flatplan management and printing arrangements. 
    Software used: Indesign, Photoshop and Illustrator. 
     <span className={styles.author}> Have a flip through and see if can spot the 
    "infamous" pizza chart?
    </span>
    
    
     </p>
<iframe 
    src="//www.slideshare.net/slideshow/embed_code/key/x3MTog1XpcJ1L1" 
    className={styles.pdf}
    
    /> 








<h2>Animations - Online Ad for The Guardian</h2>
<p>From drafting ideas to submitting finished work based on
    specifications provided by The Guardian. <span className={styles.quote}>"Why not try new things and 
    discover yourself every single day?" </span> <span className={styles.author}>Bhavya Choudhary </span>
    
    
    



</p>

<div className={styles.imageContainer}>
    <Image
        src="/Portfolio/animatedGifs/TrySomethingNew.gif"
        width={2244}
        height={1654}
        alt="animations design portfolio lucy de rojas"   
    
    
    />

</div>












<h2>Video Production<br /> & Visual Effects - Star Wars Theme Centenary Celebrations Introduction </h2>
    <p>Projected on cinema size screen during AGM. Video introduces Centenary 
        celebrations of CSSC. It starts with the 3D animation of Planet CSSC, followed by
        Star Wars yellow text describing how CSSC was founded in 1921, accompanied by the 
        characteristic music. 
        <span className={styles.author}> Press play to see where the Force will take you!    
        </span>
    </p>

<div className={styles.videoContainer}>
      <video 
        src="/Portfolio/Videos/CSSCStarWarsCentenaryIntroduction.mp4"  
        width="100%" 
        height="auto"
        controls
        
        />
</div>











<h2>Powerpoint presentations - About CSSC</h2> 
    <p>Presentation used for sales pitches. It has 27 animated slides. 
       <span className={styles.author}>
         Why not try clicking on the slides to see the power of Powerpoint?
                </span>
          </p>
    <iframe className={styles.pdf} src="https://onedrive.live.com/embed?resid=EC6BF2592866F3BD%21133&amp;authkey=%21AB0z1gC--kIE3K4&amp;em=2&amp;wdAr=1.7777777777777777&amp;Embed=1&amp;wdEaa=1">This is an embedded <a href="https://office.com">Microsoft Office</a> presentation, powered by <a href="https://office.com/webapps">Office</a>.</iframe>

    {/* <iframe src="https://onedrive.live.com/embed?resid=EC6BF2592866F3BD%21133&amp;authkey=%21AB0z1gC--kIE3K4&amp;em=2&amp;wdAr=1.7777777777777777&amp;Embed=1&amp;wdEaa=1" width="100%" height="300px" frameBorder="1">This is an embedded <a href="https://office.com">Microsoft Office</a> presentation, powered by <a href="https://office.com/webapps">Office</a>.</iframe> */}








    






            </div></LayoutContent>);
}












