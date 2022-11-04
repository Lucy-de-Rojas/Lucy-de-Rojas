import styles from '../../styles/booklet.module.css';
import Image from 'next/image';



// swiper related links:
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Lazy, EffectCube } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/lazy';
import 'swiper/css/effect-cube';

// swiper core:
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy, EffectCube]);



// sizes:

const widthSingle = "1920";
const heightSingle = "1080";




export default function PowerPoint () {


    return (<div className={styles.wrapper}>

        <Swiper

modules={[Navigation, Pagination, Scrollbar, A11y,Lazy, EffectCube]}
effect='cube'
navigation
Lazy
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}

spaceBetween={50}
slidesPerView={1}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}>







    <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res1.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 1"

    /></SwiperSlide>


<SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res2.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 2"

    /></SwiperSlide>



<SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res3.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 3"

    /></SwiperSlide>





<SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res4.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 4"

    /></SwiperSlide>





<SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res5.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 5"

    /></SwiperSlide>



      <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res6.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 6"

    /></SwiperSlide>







  <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res7.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 7"

    /></SwiperSlide>






  <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res8.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 8"

    /></SwiperSlide>









  <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res9.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 9"

    /></SwiperSlide>




  <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res10.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 10"

    /></SwiperSlide>







  <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res11.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 11"

    /></SwiperSlide>






  <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res12.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 12"

    /></SwiperSlide>






  <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res13.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 13"

    /></SwiperSlide>






  <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res14.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 14"

    /></SwiperSlide>






  <SwiperSlide>
        <Image
            src="/Portfolio/PowerPointsPresentation/AnimatedGifs-PageBYpage/CSSC Presentation June 2017 (Rolling Cube) low res15.gif"
            width={widthSingle}
            height={heightSingle}
            alt="Powerpoint Slides: slide 15"

    /></SwiperSlide>






</Swiper>

    </div>)
}