import Image from "next/image";

import styles from '../../styles/video.module.css';

import LayoutContent from "./LayoutContent";








export default function VideoContent() {



    return (<LayoutContent>
        <div className={styles.container} id="top">



            {/* mini navigation: */}
            <nav className={styles.miniNavigation}>
            <a href="#top">Top</a>
            <a href="#top">Videos</a>
            <a href="#otherDigital">Other Digital Content</a>
            </nav>



        <h1>Video Production</h1>




        <h2 id="centenaryVideo">Centenary Celebration Video </h2>

        <p className={styles.paraLeft} ><span className={styles.spanBold}>  Year:</span> April 2017</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Team size: </span>5</p>
        <p className={styles.paraLeft}> <span className={styles.spanBold}>Tools used:</span>  After Effects, Premier Pro, Photoshop and Illustrator.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Description:</span> Video announcing approaching centenary anniversary.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Contribution:</span> Ideation, visual effects, video editing, motion graphics, final post production for different media.</p>


        <p className={styles.paraLeft}><span className={styles.spanBold}>Delivery method: </span>Projected on cinema size screen during AGM Conference; published in social media (Twitter, Facebook and Instagram) and on company's website.</p>


        <div className={styles.videoContainer} >
<video
        src="/Portfolio/Videos/CSSCStarWarsCentenaryIntroduction.mp4"
        width="100%"
        height="auto"
        controls
        />
        </div>


        <h2>Invite to The Games</h2>

        <p className={styles.paraLeft} ><span className={styles.spanBold}>  Year:</span> May 2018</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Team size: </span>3</p>
        <p className={styles.paraLeft}> <span className={styles.spanBold}>Tools used:</span>  After Effects, Premier Pro, Photoshop, InDesign and Illustrator.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Description:</span> Video inviting members to The Games.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Contribution:</span> Ideation, visual effects, video editing, motion graphics, final post production for different media.</p>


        <p className={styles.paraLeft}><span className={styles.spanBold}>Delivery method: </span>Published in social media (Twitter, Facebook and Instagram), on company's website and link included in email invite.</p>

        <div className={styles.videoContainer}>
<video
        src="/Portfolio/Videos/InviteToTheGames.mp4"
        width="100%"
        height="auto"
        controls
        />
        </div>










        <h2 id="LewisCup">Lewis Football Club</h2>

        <p className={styles.paraLeft} ><span className={styles.spanBold}>  Year:</span> June 2018</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Team size: </span>8</p>
        <p className={styles.paraLeft}> <span className={styles.spanBold}>Tools used:</span>  After Effects, Premier Pro, Audition, Photoshop, InDesign and Illustrator.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Description:</span> Video of football tournament game with highlights.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Contribution:</span> Ideation, music selection and purchase, visual effects, video editing, motion graphics, final post production for different media.</p>


        <p className={styles.paraLeft}><span className={styles.spanBold}>Delivery method: </span>Published in social media (Twitter, Facebook and Instagram), on company's website.</p>


        <div className={styles.videoContainer}>
<video
        src="/Portfolio/Videos/LewisCupFootball.mp4"
        width="100%"
        height="auto"
        controls
        />
        </div>








        <h2 id="volunteers">Thank you Volunteers</h2>

        <p className={styles.paraLeft} ><span className={styles.spanBold}>  Year:</span> September 2018</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Team size: </span>4</p>
        <p className={styles.paraLeft}> <span className={styles.spanBold}>Tools used:</span>  After Effects, Premier Pro, Audition, Photoshop, InDesign and Illustrator.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Description:</span> Video thanking volunteers for their help.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Contribution:</span> Recording, music selection and purchase, ideation, visual effects, video editing, motion graphics, final post production for different media.</p>


        <p className={styles.paraLeft}><span className={styles.spanBold}>Delivery method: </span>Published in social media (Twitter, Facebook and Instagram), on company's website.</p>





        <div className={styles.videoContainer}>
<video
        src="/Portfolio/Videos/ThankYouVolunteers.mp4"
        width="100%"
        height="auto"
        controls
        />
        </div>



        <div id="otherDigital"><br /><br /></div>
        <h1>Motion Graphics & <br/> Other Digital Content</h1>





{/* guardian ad: */}
        <h2 id="GuardianAd">Online Advertising <br />(The Guardian)</h2>

        <p className={styles.paraLeft} ><span className={styles.spanBold}>  Year:</span> February 2018</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Team size: </span>4</p>
        <p className={styles.paraLeft}> <span className={styles.spanBold}>Tools used:</span>  After Effects, Premier Pro, Photoshop, InDesign and Illustrator.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Description:</span> Animated advert for the Guardian online advertising section.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Contribution:</span> Ideation, visual effects, motion graphics, final post production for different online media.</p>


        <p className={styles.paraLeft}><span className={styles.spanBold}>Delivery method: </span>Published in advertising section of the Guardian website, social media (Twitter, Facebook and Instagram) and emails.</p>


        <div className={styles.animatedGif}>
        <Image
            src="/Portfolio/animatedGifs/TrySomethingNew.gif"
            width={2244}
            height={1654}
            alt="Online Advertising with the Guardian"
            />
        </div>












{/* english heritage email: "/Portfolio/JPEGs/emailFooters/englishHeritage.png"     600x142*/}
<h2 id="emailEnglishHeritage">English Heritage Email</h2>

<p className={styles.paraLeft} ><span className={styles.spanBold}>  Year:</span> March 2017</p>
<p className={styles.paraLeft}><span className={styles.spanBold}>Team size: </span>5</p>
<p className={styles.paraLeft}> <span className={styles.spanBold}>Tools used:</span> Photoshop, InDesign and Illustrator.</p>
<p className={styles.paraLeft}><span className={styles.spanBold}>Description:</span> English Heritage graphics email.</p>
<p className={styles.paraLeft}><span className={styles.spanBold}>Contribution:</span> Ideation, visual effects, final post production for email media.</p>


<p className={styles.paraLeft}><span className={styles.spanBold}>Delivery method: </span>Sent as a part of emails.</p>


        <div className={styles.animatedGif}>
        <Image
            src="/Portfolio/JPEGs/emailFooters/englishHeritage.png"
            width={600}
            height={142}
            alt="English Heritage email footer"
            />
        </div>






{/* historical palaces email: "/Portfolio/JPEGs/emailFooters/historicalPalaces.jpg"     600x185*/}
<h2 id="emailHistoricalPalaces">Historical Palaces</h2>

<p className={styles.paraLeft} ><span className={styles.spanBold}>  Year:</span> May 2018</p>
<p className={styles.paraLeft}><span className={styles.spanBold}>Team size: </span>6</p>
<p className={styles.paraLeft}> <span className={styles.spanBold}>Tools used:</span> Photoshop, InDesign and Illustrator.</p>
<p className={styles.paraLeft}><span className={styles.spanBold}>Description:</span> Historical Palaces graphics email.</p>
<p className={styles.paraLeft}><span className={styles.spanBold}>Contribution:</span> Ideation, visual effects, final post production for email media.</p>


<p className={styles.paraLeft}><span className={styles.spanBold}>Delivery method: </span>Sent as a part of emails.</p>


        <div className={styles.animatedGif}>
        <Image
            src="/Portfolio/JPEGs/emailFooters/historicalPalaces.jpg"
            width={600}
            height={185}
            alt="Historical palaces email footer"
            />
        </div>








{/* taste card: */}

<h2 id="emailTasteCard">Taste Card email footer</h2>

<p className={styles.paraLeft} ><span className={styles.spanBold}>  Year:</span> March 2017</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Team size: </span>3</p>
        <p className={styles.paraLeft}> <span className={styles.spanBold}>Tools used:</span> Photoshop and InDesign.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Description:</span> Animated visual for email.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Contribution:</span> Ideation, visual effects, motion graphics, final post production for email media.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Delivery method: </span>Sent as a part of emails.</p>




        <div className={styles.animatedGif}>
        <Image
            src="/Portfolio/JPEGs/emailFooters/tasteCard.png"
            width={600}
            height={173}
            alt="Taste Card Logo"
            />
        </div>


















{/* animated email footer: */}
<h2>Animated email footer</h2>

<p className={styles.paraLeft} ><span className={styles.spanBold}>  Year:</span> January 2018</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Team size: </span>3</p>
        <p className={styles.paraLeft}> <span className={styles.spanBold}>Tools used:</span> Premier Pro, Photoshop, InDesign and Illustrator.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Description:</span> Animated visual for email.</p>
        <p className={styles.paraLeft}><span className={styles.spanBold}>Contribution:</span> Ideation, visual effects, motion graphics, final post production for email media.</p>


        <p className={styles.paraLeft}><span className={styles.spanBold}>Delivery method: </span>Sent as a part of emails.</p>





        <div className={styles.animatedGif}>
        <Image
            src="/Portfolio/animatedGifs/MySaving+October2017.gif"
            width={620}
            height={146}
            alt="My Saving deals email footer"
            />
        </div>







{/* christmas tree email: "/Portfolio/JPEGs/fullEmail.jpg"    600x910*/}
<h2>Full Graphics Email</h2>
<p className={styles.paraLeft} ><span className={styles.spanBold}>  Year:</span> December 2017</p>
<p className={styles.paraLeft}><span className={styles.spanBold}>Team size: </span>4</p>
<p className={styles.paraLeft}> <span className={styles.spanBold}>Tools used:</span> Photoshop, InDesign and Illustrator.</p>
<p className={styles.paraLeft}><span className={styles.spanBold}>Description:</span> Full graphics email.</p>
<p className={styles.paraLeft}><span className={styles.spanBold}>Contribution:</span> Ideation, visual effects, final post production for email media.</p>


<p className={styles.paraLeft}><span className={styles.spanBold}>Delivery method: </span>Sent as a part of emails.</p>


        <div className={styles.animatedGif}>
        <Image
            src="/Portfolio/JPEGs/emailFooters/fullEmail.jpg"
            width={600}
            height={910}
            alt="email full graphic design"
            />
        </div>










{/* 🟥   end here */}
</div></LayoutContent>);
}









