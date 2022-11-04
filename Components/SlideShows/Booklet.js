import styles from '../../styles/booklet.module.css';
import Image from 'next/image';


// import data for the images:
import { slideshowBooklet  } from '../../data/graphic-design-portfolio-slideshow';


import { slideShowBooklet2 } from '../../data/graphic-design-portfolio-slideshow';



import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const widthSingle = "900";
const heightSingle = "663";



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



export default function Slider () {

    return (<div className={styles.wrapper}>



    <Swiper

      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >



{/*
      {slideshowBooklet.map((item, index)=> {
        return  <SwiperSlide>
          <Image
          src={item.src}
          width={item.width}
          height={item.height}
          alt={item.alt}

        />  </SwiperSlide>;
      })} */}


      <SwiperSlide>

        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet1.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='page 1'

        />
      </SwiperSlide>





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






    </Swiper>











    </div>);
}