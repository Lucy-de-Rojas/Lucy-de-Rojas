import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import Layout from "@/Components/Layout";
import BackToTopButton from "@/Components/backToTopButton";


import { useEffect } from "react";
import { googleAnalyticsLucy } from "@/utils/googleAnalyticsLucy";


export default function Print () {



// running google analytics:
useEffect(() => {
        googleAnalyticsLucy();
},[]);


        let imagesALLWrapper = "w-full flex flex-col justify-center my-5 py-5 items-center";

        let imagesWrapper = "w-full md:w-1/2 flex flex-col xl:w-1/2 xl:flex-row bg-white p-5 rounded-2xl gap-5 drop-shadow-2xl my-8 items-center text-center border-2 border-red-200 rounded-2xl border-dashed justify-center";


        let buttonStyling = "xl:absolute bottom-3 text-center bg-red-400 right-0 xl:w-1/3 p-5 rounded-full mx-5 text-white font-bold";






return (<Layout>


        <Head>









                <title>Expert Print Design | Creative Solutions for Your Business Needs | High Wycombe, Buckinghamshire (Bucks)</title>
        </Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FYW3VGK0DF" />

        <BackToTopButton />

<h1>Print Design</h1>
<main className="px-14 flex flex-col items-center">

<p className="w-full md:w-3/4 xl:w-1/2">


Welcome to my print portfolio, a curated collection of my journey as a graphic designer. With over 20 years of experience crafting impactful designs across diverse mediums, I take pride in transforming ideas into visually compelling narratives. From elegant brochures to bold promotional materials, my work reflects a passion for creativity, precision, and storytelling. Each piece showcases not only technical skill but a commitment to delivering designs that resonate with audiences and elevate brands.
<br />
<br />
Thank you for taking the time to explore my work—let’s create something extraordinary together!


</p>




{/* all images wrapper: */}
<div className={imagesALLWrapper}>



































<div className={imagesWrapper}>
<div>

<Image
src="/Media/Images/Portfolio/Print Design/Harveys/NU-Solutions-Sustainable-Solutions.jpg"
width={500}
height={500}
alt="image of sustainable leaflet design"
layout="responsive"
/>

</div>

<div>
<Image
src="/Media/Images/Portfolio/Print Design/Harveys/Grains.jpg"
width={500}
height={500}
alt="image of slide of power point presentation for sustainable company"
layout="responsive"
/>

</div>

<Link className={buttonStyling} href="https://docs.google.com/presentation/d/e/2PACX-1vQbHQLPVrJuHWZY_8liKO2qj28VBJ-u8LriftaVY3IJ6NM_gESfK8BXQH1CAMhMHTngcqU-mlYUUkrB/pub?start=false&loop=false&delayms=3000
" target="_blank">See full publication</Link>

</div>








{/* stage design: */}
<div className={imagesWrapper}>
<div>

<b>Stage Design CSSC</b>
<p>NEC Birmningham 2018</p>

<Image
src="/Media/Images/Portfolio/Print Design/Stage Design/SimonAndAndy.jpg"
width={500}
height={500}
alt="image of CSSC management mocking their employees"
layout="responsive"
className="my-5 rounded-2xl"
/>



<Image
src="/Media/Images/Portfolio/Print Design/Stage Design/overview.jpg"
width={500}
height={500}
alt="image of stage design at NEC Birmingham"
layout="responsive"
className="my-5 rounded-2xl"

/>
</div>
</div>












<div className={imagesWrapper}>
<div>
<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2019/Lesiure_Scene_Autumn_Winter_2019-1.jpg"
width={500}
height={500}
alt="image of magazine front cover"
layout="responsive"
/>
</div>

<div>
<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2019/LesiureSceneAutumn2019---5.jpg"
width={500}
height={500}
alt="image of inside spread of a magazine"
layout="responsive"
/>
</div>
<Link className={buttonStyling} href="https://docs.google.com/presentation/d/e/2PACX-1vQ7Zgeu9DGQwi3JBAPh0ugG0p5TjuIyV4OM4X6pIcaMlMKO99CRSB4iw5MbU-ACH74KTyqBAwGm187o/pub?start=false&loop=false&delayms=3000
" target="_blank">See full publication</Link>
</div>







<div className={imagesWrapper}>
<div>
        <Image
        src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneSpring2016/Lesiure_Scene_Spring_Summer_2016.jpg"
        width={500}
        height={500}
        alt="image of front cover of magazine"
        layout="responsive"
        />
        </div>

<div>
         <Image
         src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneSpring2016/Lesiure_Scene_Spring_Summer_20168.jpg"
         width={500}
         height={500}
         alt="image of inside sprad of magazine"
         layout="responsive"
         />
         </div><Link className={buttonStyling} href="https://docs.google.com/presentation/d/e/2PACX-1vTgkQqHXVBNAovFdlXVujPaEcyTr1MP1kQ_nUxBRwoa3Oom-1YPtTOXmcbIanA5G7AKpNpGZf59RAOW/pub?start=false&loop=false&delayms=3000
" target="_blank">See full publication</Link>
</div>








<div className={imagesWrapper}>

<div>
        <Image
        src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2017/Lesiure_Scene_Spring_Summer_2017.jpg"
        width={500}
        height={500}
        alt="image of front cover of magazine"
        layout="responsive"
        />
        </div>


<div>
         <Image
         src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2017/LesiureSceneSpring20175.jpg"
         width={500}
         height={500}
         alt="image of inside sprad of magazine"
         layout="responsive"
         />
         </div><Link className={buttonStyling} href="https://docs.google.com/presentation/d/e/2PACX-1vT2AwswOIeZ-nHLeRtvhMFtOD7h0zBkpL0yD3I3BwLpmRlfEOztyyQloY8m_NCbeT_SHXA9_tJzpLrN/pub?start=false&loop=false&delayms=3000
" target="_blank">See full publication</Link>
</div>








<div className={imagesWrapper}>
<div>
<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2017/Lesiure_Scene_Autumn_Winter_2018.jpg"
width={500}
height={500}
alt="image of front cover of magazine"
layout="responsive"
/>
</div>



<div>
<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneAutumn2017/LeisureSceneAutumn2017--6.jpg"
width={500}
height={500}
alt="image of inside sprad of magazine"
layout="responsive"
/>
</div>

<Link className={buttonStyling} href="https://docs.google.com/presentation/d/e/2PACX-1vSRPEgIZpzQNJUAEnvzyeaWZxSc3K3YysFkdDt_Is3Iul3Lq0AjWNhbB6E1Pw4x_gxfyP0N2kHY5YRA/pub?start=false&loop=false&delayms=3000
" target="_blank">See full publication</Link>
</div>










<div className={imagesWrapper}>
<div>
<Image
src="/Media/Images/Portfolio/Print Design/Booklets/BenefitsOfMembership/CSSCBenefitsofMembership---.jpg"
width={500}
height={500}
alt="image of inside sprad of magazine"
layout="responsive"
/>
</div>



<div>
<Image
src="/Media/Images/Portfolio/Print Design/Booklets/BenefitsOfMembership/CSSCBenefitsofMembership---16.jpg"
width={500}
height={500}
alt="image of front cover of magazine"
layout="responsive"
/>
</div>

<Link className={buttonStyling} href="https://docs.google.com/presentation/d/e/2PACX-1vSEaes8rv-Qdu4HPXzfKYjEptF7MBtdlHEFq6hBwUWL5z2cBp-z9_e-2uQ_O-JsvweMwo3SbjIUWJCT/pub?start=false&loop=false&delayms=3000
" target="_blank">See full publication</Link>
</div>










<div className={imagesWrapper}>

<div>
<Image
src="/Media/Images/Portfolio/Print Design/Booklets/WhatsOnInLondon2017/WhatsOnInLondon2017-----.jpg"
width={500}
height={500}
alt="image of inside sprad of magazine"
layout="responsive"
/>
</div>


<div>
<Image
src="/Media/Images/Portfolio/Print Design/Booklets/WhatsOnInLondon2017/WhatsOnInLondon2017-----14.jpg"
width={500}
height={500}
alt="image of front cover of magazine"
layout="responsive"
/>
</div>
<Link className={buttonStyling} href="https://docs.google.com/presentation/d/e/2PACX-1vT5EMFypnqnUhNIyfcWOyHUqYP22DsaMVHDS6dr-nMsNEhddJqZPl0_MBuiqJGklg332utYMeKC26Am/pub?start=false&loop=false&delayms=3000
" target="_blank">See full publication</Link>
</div>







<div className={imagesWrapper}>
<div>
<Image
src="/Media/Images/Portfolio/Print Design/Booklets/BenefitsOfMembership2017/CSSCBenefitsofMembership2017---.jpg"
width={500}
height={500}
alt="image of front cover of magazine"
layout="responsive"
/>
</div>



<div>
<Image
src="/Media/Images/Portfolio/Print Design/Booklets/BenefitsOfMembership2017/CSSCBenefitsofMembership2017---5.jpg"
width={500}
height={500}
alt="image of inside sprad of magazine"
layout="responsive"
/>
</div>


<Link className={buttonStyling} href="https://docs.google.com/presentation/d/e/2PACX-1vRPfX8mMuitSRHkgrkfTqiY-2L5bg7EZkOuRwVj2FfEpTCPTDC5ZcsTlnmMp5S1z3_dw1WYuP7BYbnw/pub?start=false&loop=false&delayms=3000
" target="_blank">See full publication</Link>

</div>








<div className={imagesWrapper}>
<div>
<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneSpring2018/Lesiure_Scene_Spring_Summer_2018.jpg"
width={500}
height={500}
alt="image of inside sprad of magazine"
layout="responsive"
/>
</div>


<div>
<Image
src="/Media/Images/Portfolio/Print Design/Leisrure_Scenes/SPREADS/LeisureSceneSpring2018/LesiureSceneSpring2018---9.jpg"
width={500}
height={500}
alt="image of front cover of magazine"
layout="responsive"
/>
</div>

<Link className={buttonStyling} href="https://docs.google.com/presentation/d/e/2PACX-1vQ5zNbF-xaAidcDQj5S7Y125eMwinbibPGJlsl6VrMHgC9OtT45ABlCBCbLMgy6XFSP7b6cUNoRFweb/pub?start=false&loop=false&delayms=3000
" target="_blank">See full publication</Link>
</div>







<div className={imagesWrapper}>
<div>
<Image
src="/Media/Images/Portfolio/Print Design/Booklets/WhatsOnInLindon2016/WhatsOnInLondon2016---.jpg"
width={500}
height={500}
alt="image of front cover of magazine"
layout="responsive"
/>
</div>








<div>
<Image
src="/Media/Images/Portfolio/Print Design/Booklets/WhatsOnInLindon2016/WhatsOnInLondon2016---2.jpg"
width={500}
height={500}
alt="image of front cover of magazine"
layout="responsive"
/>
</div>

<Link className={buttonStyling} href="https://docs.google.com/presentation/d/e/2PACX-1vTCeC_EnUugvciceFfV-ZtgZ-krTdECgYCj1ICtluW12rfKBAbrnN3aJguIx6jPogDIvxIhv7T1OCl7/pub?start=false&loop=false&delayms=3000
" target="_blank">See full publication</Link>

</div>










{/* packaging design: */}
<div className={imagesWrapper}>
<div>

<b>Packaging Design</b>
<p>CSSC (2017)</p>

<Image
src="/Media/Images/Portfolio/Print Design/PackagingDesign/PackagingDesign - CSSC.jpg"
width={500}
height={500}
alt="image of packaging design"
layout="responsive"
className="my-5 rounded-2xl"
/>

</div>
</div>













{/* 3D print design: */}
<div className={imagesWrapper}>
<div>

<b>3D Print Design</b>
<p>CSSC (2016)</p>

<Image
src="/Media/Images/Portfolio/Print Design/3D Print Design/3D-printed-volunteer-award-badge-CSSC-back-and-front.jpg"
width={500}
height={500}
alt="image of 3D design badge"
layout="responsive"
className="my-5 rounded-2xl"
/>

</div>
</div>













</div>   {/* end of all images wrapper */}
</main></Layout>)};

















