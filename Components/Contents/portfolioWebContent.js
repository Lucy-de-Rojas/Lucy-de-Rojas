import LayoutContent from "./LayoutContent";
import styles from "../../styles/graphic-design-portfolio.module.css";
import Link from "next/link";
import { portfolioWebData } from "../../data/portfolioWebData";



/*
const portfolioWebData = [
    {
        header: "Trivia Website",
        src:"https://lucy-de-rojas.github.io/trivia/",
        githubLink: "https://github.com/Lucy-de-Rojas/trivia/",
        description: "Trivia site",
        technologies: "JS, React",
        challenges: "challenges",
        enjoyed: "enjoyed",
        learnedSomethingNew: "learned something new", 
    },{
        header:"",
        src: "",
        description: "",
        technologies: "",
        challenges: "",
        enjoyed: "",
        learnedSomethingNew: ""

    },
];
*/
console.log(portfolioWebData[0].githubLink);




export default function PortfolioWebContent() {

    





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

{portfolioWebData.map((item)=> {
    return (<div className={styles.container}>

        <h2>{item.header}:</h2>
        <p>Description:{item.description}</p>
        <iframe src={item.src} className={styles.pdf} />

        <p>Technologies: {item.technologies}</p>
        <p>Challenges: {item.challenges}</p>
        <p>Enjoyed: {item.enjoyed}</p>
        <p>Learned something new: {item.learnedSomethingNew}</p>


        {/* <Link href={item.githubLink}><a>Github Link</a></Link> */}

        <a href={item.githubLink}>Github Link</a>



    


      



<hr className={styles.hrline} />
    </div>)
})}


                





    </LayoutContent>);
}













