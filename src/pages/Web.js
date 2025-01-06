import Head from "next/head";
import Link from "next/link";

// my components:
import Layout from "@/Components/Layout"
import BackToTopButton from "@/Components/backToTopButton";




export default function Web () {



        // styling:
        let styleIframeWrapper = "iframeWrapper w-full flex flex-col items-center h-[900px] bg-red-200 rounded-lg mt-20 shadow-2xl py-10 text-center px-16 md:w-3/4 xl:w-1/2";

        let styleIframe = "w-[100%] h-[600px] shadow-2xl border-2 border-dotted border-blue-500 overflow-hidden rounded-2xl p-10 my-10 bg-white";


        let styleIframerTitle = "text-3xl font-bold text-slate-500";

        let styleIframeDescription ="";

        let styleIframeTools = "";

        let styleHR = "w-full h-1 bg-slate-100 mt-2 mb-2 rounded-full lg:w-1/3";


        let styleLink = "bg-slate-500 text-white w-full rounded-full py-2 my-2 shadow-2xl";


        // end of styling








return (<Layout>
        <Head>
                <title>React Web Development | Modern & Accessible Web | Tailored Web Experiences | High Wycombe, Buckinghamshire (Bucks)


                        </title>
        </Head>


        <BackToTopButton />



<h1>Web</h1>
<main className="px-14 pb-14 flex flex-col items-center">

<p className="w-full md:w-3/4 xl:w-1/2">
I’m a motivated React JS/Next JS Developer with a strong focus on creating clean, responsive, and accessible web applications. With a background in digital design and UI, I bring a keen eye for detail and user-centered solutions to front-end development. My work showcases dynamic, interactive projects built with modern frameworks, ensuring seamless performance and an engaging user experience. Let’s build something great together!</p>





{/* FocusRite: */}
<div className={styleIframeWrapper}>

<p className={styleIframerTitle}>FocusRite <br /> Wav File Head Parser</p>
<p className={styleIframeDescription}>Single page web app analysing wav file header and displaying result in browser. It can use drag&drop or traditional file input.Created as part of selection process.</p>
<Link href="https://focus-rite.vercel.app/"  target="_blank" className={styleLink}>Visit the site</Link>
<hr className={styleHR}/>
<p className={styleIframeTools}>Next JS &#x2022; Tailwind &#x2022; HTML </p>


<iframe
        src="https://focus-rite.vercel.app/"
        title="FocusRite live site"
        scroll="no"
        className={styleIframe}

        >
</iframe></div>











{/* Giga clear: */}
<div className={styleIframeWrapper}>

<p className={styleIframerTitle}>Giga Clear </p>
<p className={styleIframeDescription}>Single web page filtering  tool to look for a posts. With dynamic page display.</p>

<Link href="https://giga-clear.vercel.app/"  target="_blank" className={styleLink}>Visit the site</Link>

<hr className={styleHR}/>
<p className={styleIframeTools}>Next JS &#x2022; Tailwind &#x2022; HTML</p>


<iframe
        src="https://giga-clear.vercel.app/"
        title="Giga Clear live site"
        scroll="no"
        className={styleIframe}

        >
</iframe></div>



















{/* EF: */}
<div className={styleIframeWrapper}>

<p className={styleIframerTitle}>Education First </p>
<p className={styleIframeDescription}>Single web page filtering and sorting tool to look for a course. It uses topics and learning filtering, with possibility to sort results in alphabetical order, ascending and descending.</p>

<Link href="https://ef-8bgb.vercel.app/"  target="_blank" className={styleLink}>Visit the site</Link>

<hr className={styleHR}/>
<p className={styleIframeTools}>Next JS &#x2022; Tailwind &#x2022; HTML</p>


<iframe
        src="https://ef-8bgb.vercel.app/"
        title="EF live site"
        scroll="no"
        className={styleIframe}

        >
</iframe></div>







{/* Laceys: */}
<div className={styleIframeWrapper}>

<p className={styleIframerTitle}>Laceys Farm Shop </p>
<p className={styleIframeDescription}>Improved look and feel of local organic farm shop. Emphasis was put on ease of finding the shop products online locally and to keep customers up-to-date with offers and deals.</p>

<Link href="https://laceys.vercel.app/"  target="_blank" className={styleLink}>Visit the site</Link>

<hr className={styleHR}/>
<p className={styleIframeTools}>Next JS &#x2022; CSS &#x2022; HTML &#x2022; Anime JS</p>


<iframe
        src="https://laceys.vercel.app/"
        title="Laceys live site"
        scroll="no"
        className={styleIframe}

        >
</iframe></div>




{/* Chanelle: */}
<div className={styleIframeWrapper}>

<p className={styleIframerTitle}>Chanelle Beauty</p>
<p className={styleIframeDescription}>Created a brand new website for a beautician where the priority was to have online presence and being easily found and contacted in local area using google search.</p>


<Link href="https://beyond-beauty-by-chanelle.vercel.app/"  target="_blank" className={styleLink}>Visit the site</Link>

<hr className={styleHR}/>
<p className={styleIframeTools}>Next JS &#x2022; CSS &#x2022; HTML &#x2022; Anime JS</p>

<iframe
        src="https://beyond-beauty-by-chanelle.vercel.app/"
        title="Chanelle live site"
        scroll="no"
        className={styleIframe}

        >
</iframe></div>





{/* Naphill: */}

<div className={styleIframeWrapper}>

<p className={styleIframerTitle}>Naphill Tennis Club</p>
<p className={styleIframeDescription}>This task involved updating a website's look and feel into a modern sporty look. Apart from the club information being available online, it was important to be listed in search results for anyone looking to join local, family friendly club. </p>


<Link href="https://naphill-tennis-club.vercel.app/"  target="_blank" className={styleLink}>Visit the site</Link>

<hr className={styleHR}/>
<p className={styleIframeTools}>Next JS &#x2022; CSS &#x2022; HTML &#x2022; Anime JS</p>


<iframe
        src="https://naphill-tennis-club.vercel.app/"
        title="Naphill Tennis Club live site"
        scroll="no"
        className={styleIframe}

        >
</iframe></div>



{/* GigaClear: */}


{/* Water Company: */}



















</main></Layout>)};