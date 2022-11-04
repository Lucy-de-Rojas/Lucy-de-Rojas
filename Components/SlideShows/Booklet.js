import styles from '../../styles/booklet.module.css';
import Image from 'next/image';


// import data for the images:
// import { slideshowBooklet  } from '../../data/graphic-design-portfolio-slideshow';


// import { slideShowBooklet2 } from '../../data/graphic-design-portfolio-slideshow';



import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Lazy } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/lazy';




const widthSingle = "900";
const heightSingle = "663";
const altMain = "Benefits of Membership booklet 2018: ";
const srcMainLink = '/portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet';


let slideShowBooklet2 = [];


for(let i=1;i<=24;i++){
    // console.log(i + ' hello.jpg');

    let item = {
        src: srcMainLink + i + '.jpg',
        width: widthSingle,
        height: heightSingle,
        alt: altMain + ' page '   + i,
    };


    console.log(item);


    slideShowBooklet2.push(item);


  }




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy]);



export default function Slider () {

    return (<div className={styles.wrapper}>



    <Swiper

      modules={[Navigation, Pagination, Scrollbar, A11y,Lazy]}
      navigation
      Lazy
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >



















        {slideShowBooklet2.map((item)=> {

          return <SwiperSlide>
            <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
                 />
          </SwiperSlide>
        })}





{/*
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet1.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='page 1'

        />





      <SwiperSlide>

        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet2.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='page 2'

        />
      </SwiperSlide>




      <SwiperSlide>

        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet3.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='page 3'

        />
      </SwiperSlide>


 */}





    </Swiper>











    </div>);
}