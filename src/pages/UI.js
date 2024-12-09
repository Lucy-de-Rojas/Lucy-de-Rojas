import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import OneItem from "@/Components/oneItem";
import ThreeItems from "@/Components/threeItems";

import Layout from "@/Components/Layout";
import BackToTopButton from "@/Components/backToTopButton";



import { useEffect } from "react";
import { googleAnalyticsLucy } from "@/utils/googleAnalyticsLucy";



export default function UI () {



// running google analytics:
useEffect(() => {
        googleAnalyticsLucy();
},[]);


        let imageMarginY = "my-14 drop-shadow-2xl rounded-xl";
        let linkToPrototypesStyle = "p-5 my-5 rounded-xl bg-red-200 text-center w-full md:w-3/4 xl:w-1/2 drop-shadow-2xl";
        let boxStyle = "w-full md:w-3/4 xl:w-1/2 drop-shadow-2xl"


        let mobilePrototypeText = "Click this box to see mobile 📱 prototype.";
        let desktopPrototypeText = "Click this box to see desktop 💻 prototype.";







return (<Layout>
        <Head>




                <title>
User Interface Design | Modern & Accessible Web Design | Tailored Digital Experiences | High Wycombe, Buckinghamshire (Bucks)
                </title></Head>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-FYW3VGK0DF" />


        <BackToTopButton />


<h1>UI Design</h1>

<main className="px-14 pb-14 flex flex-col items-center">

<p className="w-full md:w-3/4 xl:w-1/2">
I’m a passionate web designer dedicated to crafting beautiful, functional, and user-centered digital experiences. With expertise in responsive design, accessible interfaces, and innovative problem-solving, I transform ideas into engaging online solutions that meet user needs and business goals.
<br />
<br />
From concept to completion, my work is driven by creativity, collaboration, and a commitment to excellence. Dive in to explore my projects and see how I bring visions to life on the web!
</p>


{/*
water company
mobile link:  🎈
https://www.figma.com/proto/Fvo2PU4HmlT58ajRuWibrt/Water-Bottling-Aqua-Quacamaya?node-id=555-378&node-type=canvas&viewport=548%2C371%2C0.02&t=RmMHJiDfE8M0CXpL-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=564%3A22&show-proto-sidebar=1

Desktrop Link: 🎈
https://www.figma.com/proto/Fvo2PU4HmlT58ajRuWibrt/Water-Bottling-Aqua-Quacamaya?node-id=555-378&node-type=canvas&viewport=548%2C371%2C0.02&t=W37bH0mX43j2XuRI-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=577%3A12&show-proto-sidebar=1




Laceys
mobile link:
https://www.figma.com/proto/pXc7s9wQgbpIMZBXDT6n1h/Laceys?node-id=0-1&node-type=canvas&viewport=343%2C478%2C0.02&t=vOaL0nP26bwqKR1d-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=55%3A7875&show-proto-sidebar=1

desktop link:
https://www.figma.com/proto/pXc7s9wQgbpIMZBXDT6n1h/Laceys?node-id=0-1&node-type=canvas&viewport=343%2C478%2C0.02&t=vOaL0nP26bwqKR1d-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=129%3A6902&show-proto-sidebar=1



chanelle
mobile page link:
https://www.figma.com/proto/e1VmnoQvT9wQDNCXyTAoAk/Beauty-by-Chanelle?node-id=0-1&node-type=canvas&viewport=1351%2C-1426%2C0.27&t=B4O2DvcVb5k3ZBZi-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=223%3A152&show-proto-sidebar=1

desktop page link:
https://www.figma.com/proto/e1VmnoQvT9wQDNCXyTAoAk/Beauty-by-Chanelle?node-id=0-1&node-type=canvas&viewport=1351%2C-1426%2C0.27&t=B4O2DvcVb5k3ZBZi-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=304%3A527&show-proto-sidebar=1




Naphill

mobile link:
https://www.figma.com/proto/tYvFzMtJQ7Mg36L9ZmXJAV/Naphill-Tennis-Club?node-id=0-1&node-type=canvas&viewport=481%2C359%2C0.03&t=mCa1Fbg0nsFraa56-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=207%3A191&show-proto-sidebar=1


desktrop link:
https://www.figma.com/proto/tYvFzMtJQ7Mg36L9ZmXJAV/Naphill-Tennis-Club?node-id=0-1&node-type=canvas&viewport=481%2C359%2C0.03&t=mCa1Fbg0nsFraa56-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=207%3A349&show-proto-sidebar=1








My site:
mobile page link:
https://www.figma.com/proto/kmyM86eZQFUqKt3I2THPuh/Lucy-de-Rojas?node-id=0-1&node-type=canvas&viewport=669%2C182%2C0.07&t=dITXoyTdpFvC0P13-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A142&show-proto-sidebar=1

desktop page link:
https://www.figma.com/proto/kmyM86eZQFUqKt3I2THPuh/Lucy-de-Rojas?node-id=0-1&node-type=canvas&viewport=669%2C182%2C0.07&t=dITXoyTdpFvC0P13-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=123%3A2622&show-proto-sidebar=1





cssc centenary:
desktop:
https://www.figma.com/proto/MmmDVxYW4T9L5TNRozYH62/CSSC-Centenary?node-id=0-1&node-type=canvas&viewport=-3%2C68%2C0.15&t=v0pajn9PQOmTNVeq-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=11%3A4&show-proto-sidebar=1

mobile:
https://www.figma.com/proto/MmmDVxYW4T9L5TNRozYH62/CSSC-Centenary?node-id=0-1&node-type=canvas&viewport=-3%2C68%2C0.15&t=v0pajn9PQOmTNVeq-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=28%3A346&show-proto-sidebar=1




 */}


<Link href="https://www.figma.com/proto/Fvo2PU4HmlT58ajRuWibrt/Water-Bottling-Aqua-Quacamaya?node-id=555-378&node-type=canvas&viewport=548%2C371%2C0.02&t=W37bH0mX43j2XuRI-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=577%3A12&show-proto-sidebar=1" className={linkToPrototypesStyle} target="_blank">
<Image
                        src="/Media/Images/Portfolio/UI Design/Water-FULLscreen3.jpg"
                        width={500}
                        height={500}
                        alt=""
                        layout="responsive"
                        className={imageMarginY}
                        />
                        <p>{desktopPrototypeText}</p>
                        </Link>


<div className={boxStyle}>
                       <Image
                       src="/Media/Images/Portfolio/UI Design/Water-FULLscreen2.jpg"
                       width={500}
                       height={500}
                       alt=""
                       layout="responsive"
                       className={imageMarginY}
                       />
                       </div>



<div className={boxStyle}>
<Image
                     src="/Media/Images/Portfolio/UI Design/Water-desktop-and-mobile-homepage.jpg"
                     width={500}
                     height={500}
                     alt=""
                     layout="responsive"
                     className={imageMarginY}
                      /></div>

<Link href="https://www.figma.com/proto/Fvo2PU4HmlT58ajRuWibrt/Water-Bottling-Aqua-Quacamaya?node-id=555-378&node-type=canvas&viewport=548%2C371%2C0.02&t=RmMHJiDfE8M0CXpL-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=564%3A22&show-proto-sidebar=1" target="_blank" className={linkToPrototypesStyle}>
<Image
                          src="/Media/Images/Portfolio/UI Design/Water-Mobile-screens.jpg"
                          width={500}
                          height={500}
                          alt=""
                          layout="responsive"
                          className={imageMarginY}
                          />
<p>{mobilePrototypeText}</p>
                          </Link>



                          <div className={boxStyle}>
                         <Image
                         src="/Media/Images/Portfolio/UI Design/Water-FULLscreen4.jpg"
                         width={500}
                         height={500}
                         alt=""
                         layout="responsive"
                         className={imageMarginY}
                          /></div>





<div className={boxStyle}>

<Image
                      src="/Media/Images/Portfolio/UI Design/Water-FULLscreen1.jpg"
                      width={500}
                      height={500}
                      alt=""
                      layout="responsive"
                      className={imageMarginY}
                      />
                      </div>



<Link href="https://www.figma.com/proto/pXc7s9wQgbpIMZBXDT6n1h/Laceys?page-id=0%3A1&node-id=129-6902&node-type=frame&t=ARhwU9O0ZVFQfBdI-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=129%3A6902&show-proto-sidebar=1" target="_blank" className={linkToPrototypesStyle}>
<Image
                   src="/Media/Images/Portfolio/UI Design/Laceys-Desktop-home-page.jpg"
                   width={500}
                   height={500}
                   alt=""
                   layout="responsive"
                   className={imageMarginY}
                   />
<p>{desktopPrototypeText}</p>
                   </Link>





<Link href="https://www.figma.com/proto/pXc7s9wQgbpIMZBXDT6n1h/Laceys?page-id=0%3A1&node-id=55-7875&node-type=frame&t=ARhwU9O0ZVFQfBdI-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=55%3A7875&show-proto-sidebar=1" target="_blank" className={linkToPrototypesStyle}>

<Image
                           src="/Media/Images/Portfolio/UI Design/Laceys-Mobile-Screens.jpg"
                           width={500}
                           height={500}
                           alt=""
                           layout="responsive"
                           className={imageMarginY}
                           />
<p>{mobilePrototypeText}</p>
                           </Link>





<Link href="https://www.figma.com/design/pXc7s9wQgbpIMZBXDT6n1h/Laceys?node-id=129-6902&node-type=frame&t=fMZxqWoUW8eS0tmE-0" target="_blank" className={linkToPrototypesStyle}>
<Image
                     src="/Media/Images/Portfolio/UI Design/Laceys-Entire-Screen.jpg"
                     width={500}
                     height={500}
                     alt=""
                     layout="responsive"
                     className={imageMarginY}
                     />
                     <p>Link to Figma file.</p>
                     </Link>








<chanelle className={linkToPrototypesStyle}>

<Image
              src="/Media/Images/Portfolio/UI Design/ChanelleScreenShot.jpg"
              width={500}
              height={500}
              alt=""
              layout="responsive"
              className={imageMarginY}
              />

              <Link href="https://www.figma.com/proto/e1VmnoQvT9wQDNCXyTAoAk/Beauty-by-Chanelle?node-id=0-1&node-type=canvas&viewport=1351%2C-1426%2C0.27&t=B4O2DvcVb5k3ZBZi-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=223%3A152&show-proto-sidebar=1" target="_blank">Link to mobile 📱 prototype.</Link>
              <br />
              <br />

              <Link href="https://www.figma.com/proto/e1VmnoQvT9wQDNCXyTAoAk/Beauty-by-Chanelle?node-id=0-1&node-type=canvas&viewport=1351%2C-1426%2C0.27&t=B4O2DvcVb5k3ZBZi-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=304%3A527&show-proto-sidebar=1" target="_blank">Link to desktop 💻 prototype.</Link>


              </chanelle>




<Link href="https://www.figma.com/proto/tYvFzMtJQ7Mg36L9ZmXJAV/Naphill-Tennis-Club?node-id=0-1&node-type=canvas&viewport=481%2C359%2C0.03&t=mCa1Fbg0nsFraa56-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=207%3A349&show-proto-sidebar=1" target="_blank" className={linkToPrototypesStyle}>
<Image
                 src="/Media/Images/Portfolio/UI Design/Naphill-Desktop-Home-page.jpg"
                 width={500}
                 height={500}
                 alt=""
                 layout="responsive"
                 className={imageMarginY}
                 />
                 <p>{desktopPrototypeText}</p>
                 </Link>



<Link href="https://www.figma.com/proto/tYvFzMtJQ7Mg36L9ZmXJAV/Naphill-Tennis-Club?node-id=0-1&node-type=canvas&viewport=481%2C359%2C0.03&t=mCa1Fbg0nsFraa56-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=207%3A191&show-proto-sidebar=1" target="_blank" className={linkToPrototypesStyle}>
<Image
                            src="/Media/Images/Portfolio/UI Design/Naphill Tennis Club Mobiel Screens.jpg"
                            width={500}
                            height={500}
                            alt=""
                            layout="responsive"
                            className={imageMarginY}
                            />

                            <p>{mobilePrototypeText}</p>

                            </Link>

                            <div className={boxStyle}>
                <Image
                src="/Media/Images/Portfolio/UI Design/Naphill-Desktop-contact-us.jpg"
                width={500}
                height={500}
                alt=""
                layout="responsive"
                className={imageMarginY}
                 /></div>







<Link href="https://www.figma.com/design/tYvFzMtJQ7Mg36L9ZmXJAV/Naphill-Tennis-Club?node-id=0-1&node-type=canvas&t=nNFOPr1hB9Z2RMlk-0" target="_blank" className={linkToPrototypesStyle}>

                    <Image
                    src="/Media/Images/Portfolio/UI Design/Naphill-Tennis-Club.jpg"
                    width={500}
                    height={500}
                    alt=""
                    layout="responsive"
                    className={imageMarginY}
                    />
                    <p>Link to Figma file.</p>
                    </Link>



<Link href="https://www.figma.com/proto/MmmDVxYW4T9L5TNRozYH62/CSSC-Centenary?node-id=0-1&node-type=canvas&viewport=-3%2C68%2C0.15&t=v0pajn9PQOmTNVeq-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=11%3A4&show-proto-sidebar=1" target="_blank" className={linkToPrototypesStyle}>

<Image
                src="/Media/Images/Portfolio/UI Design/CSSC2.jpg"
                width={500}
                height={500}
                alt=""
                layout="responsive"
                className={imageMarginY}
                />

                <p>{desktopPrototypeText}</p>

                </Link>





<Link href="https://www.figma.com/proto/MmmDVxYW4T9L5TNRozYH62/CSSC-Centenary?node-id=0-1&node-type=canvas&viewport=-3%2C68%2C0.15&t=v0pajn9PQOmTNVeq-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=28%3A346&show-proto-sidebar=1" target="_blank" className="p-5 my-5 rounded-xl bg-red-200 text-center w-full md:w-3/4 xl:w-1/2 drop-shadow-2xl flex flex-col items-center">
<div className="w-1/2">
<Image
               src="/Media/Images/Portfolio/UI Design/CSSC1.jpg"
               width={500}
               height={500}
               alt=""
               layout="responsive"
               className={imageMarginY}
               />
               </div>

               <p>{mobilePrototypeText}</p>

               </Link>



<Link href="https://www.figma.com/design/MmmDVxYW4T9L5TNRozYH62/CSSC-Centenary?node-id=0-1&node-type=canvas&t=uq0rT0iWNedoidcX-0" className={linkToPrototypesStyle} target="_blank">
                 <Image
                 src="/Media/Images/Portfolio/UI Design/CSSC3.jpg"
                 width={500}
                 height={500}
                 alt=""
                 layout="responsive"
                 className={imageMarginY}
                 />
                 <p>Link to Figma file.</p>
                 </Link>






</main>
</Layout>)};















