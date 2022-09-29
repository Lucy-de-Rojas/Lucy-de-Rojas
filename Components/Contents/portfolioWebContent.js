import LayoutContent from "./LayoutContent";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/web-dev-portfolio.module.css";
import { portfolioWebData } from "../../data/portfolioWebData";






export default function PortfolioWebContent() {
    console.clear();

  





    return (<LayoutContent>



        <h1>portfolio web dev</h1>


        title, short description, technologies used, difficulties, link to real site, use iframe to proview the site,  links to github & vercel pages, github - fix READMEs




        <br />
        <br />

        👉 silly seo2 (vercel)
        <br />
    

        <br />
        👉 weather station

        <br />
        👉 something with back end (party invite)



<hr className={styles.hrline} />



  {



    portfolioWebData.map((item, index)=> {

    
        return ( 
        
        <div className={styles.wrapper} key={index}>

            <h1>{item.header}</h1>
            <p>{item.description}</p>

        <div className={styles.image}><Image
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            quality={item.quality}
            /></div>


            <h2>Technologies:</h2>
            <p> {item.technologies}</p>

            <h2>Enjoyed</h2>
            <p> {item.enjoyed}</p>

            <h2>Challenges:</h2>
            <p>{item.challenges}</p>
            
            <h2>Learned something new:</h2>
            <p>{item.learnedSomethingNew}</p>



            <h2>Links:</h2>
            <Link href={item.githubLink}><a target="_blank">Github</a></Link>


            <Link href={item.liveSiteLink}><a target="_blank">Live Site</a></Link>





            
            <hr className={styles.hrline} />
            </div>)


       
    })


}
      





    </LayoutContent>);
}













