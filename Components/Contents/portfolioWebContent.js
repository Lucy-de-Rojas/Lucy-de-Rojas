import LayoutContent from "./LayoutContent";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/web-dev-portfolio.module.css";
import { portfolioWebData } from "../../data/portfolioWebData";






export default function PortfolioWebContent() {
    console.clear();







    return (<LayoutContent>



        <h1>Web Development - Portfolio</h1>




<hr className={styles.hrline} />



  {



    portfolioWebData.map((item, index)=> {


        return (

        <div className={styles.wrapper} key={index}>


{/* HEADER: */}
            <h1 id={item.id}>{item.header}</h1>

{/* DESCRIPTION: */}
            <p className={styles.para}>{item.description}</p>



{/* LINKS: */}
<h2>{item.header} Links:</h2>
            <Link href={item.githubLink}><a target="_blank"> Github</a></Link>


            <Link href={item.liveSiteLink}><a target="_blank">Live Site</a></Link>



{/* RECOMMENDATION: */}
{item.recommendation && <div>
    <h2>{item.header} Recommendation</h2>
    <p style={{
        fontStyle: 'italic',

    }}> {item.recommendation} </p>
    <p> {item.recommendationBy} </p>
    </div>}




{/* SCREENSHOT: */}
        <div className={styles.image}><Image
            src={item.src}
            width={item.width}
            height={item.height}
            alt={item.alt}
            quality={item.quality}
            /></div>








            <hr className={styles.hrline} />
            </div>)



    })


}






    </LayoutContent>);
}













