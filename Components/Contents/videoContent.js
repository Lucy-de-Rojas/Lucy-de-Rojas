import Image from "next/image";


import styles from '../../styles/video.module.css';

import LayoutContent from "./LayoutContent";
import Lucy from "../SVGs/Lucy";



import {allIcons} from '../../data/about-page-data';
import {iconsDesign} from '../../data/about-page-data';





export default function VideoContent() {



    return (<LayoutContent>

        <div className={styles.container}>

        <h1>Video Production</h1>




        <h2>Centenary Celebration Video</h2>
        <div className={styles.videoContainer}>
<video
        src="/Portfolio/Videos/CSSCStarWarsCentenaryIntroduction.mp4"
        width="100%"
        height="auto"
        controls
        />

        </div>


        <h2>Invite to The Games</h2>

        <div className={styles.videoContainer}>


<video
        src="/Portfolio/Videos/InviteToTheGames.mp4"
        width="100%"
        height="auto"
        controls
        />
        </div>










        <h2>Lewis Football Club</h2>

        <div className={styles.videoContainer}>


<video
        src="/Portfolio/Videos/LewisCupFootball.mp4"
        width="100%"
        height="auto"
        controls
        />
        </div>








        <h2>Thank you Volunteers</h2>

        <div className={styles.videoContainer}>


<video
        src="/Portfolio/Videos/ThankYouVolunteers.mp4"
        width="100%"
        height="auto"
        controls
        />
        </div>



        <h1>Motion Graphics & <br/> Other Digital Content</h1>


<h2>Online Advertising <br />(The Guardian)</h2>
        <div className={styles.animatedGif}>

        <Image
            src="/Portfolio/animatedGifs/TrySomethingNew.gif"
            width={2244}
            height={1654}
            alt="Online Advertising with the Guardian"



            />


        </div>











<h2>Animated email footer</h2>
        <div className={styles.animatedGif}>
        <Image
            src="/Portfolio/animatedGifs/MySaving+October2017.gif"
            width={620}
            height={146}
            alt=""
            />
        </div>







{/* christmas tree email: "/Portfolio/JPEGs/fullEmail.jpg"    600x910*/}

<h2>Full Email</h2>
        <div className={styles.animatedGif}>
        <Image
            src="/Portfolio/JPEGs/emailFooters/fullEmail.jpg"
            width={600}
            height={910}
            alt=""
            />
        </div>




{/* english heritage email: "/Portfolio/JPEGs/emailFooters/englishHeritage.png"     600x142*/}

<h2>English Heritage Email</h2>
        <div className={styles.animatedGif}>
        <Image
            src="/Portfolio/JPEGs/emailFooters/englishHeritage.png"
            width={600}
            height={142}
            alt=""
            />
        </div>






{/* historical palaces email: "/Portfolio/JPEGs/emailFooters/historicalPalaces.jpg"     600x185*/}

<h2>Historical Palaces</h2>
        <div className={styles.animatedGif}>
        <Image
            src="/Portfolio/JPEGs/emailFooters/historicalPalaces.jpg"
            width={600}
            height={185}
            alt=""
            />
        </div>











{/* 🟥   end here */}

        </div></LayoutContent>);
}









