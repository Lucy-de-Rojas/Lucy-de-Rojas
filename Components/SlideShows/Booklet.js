import styles from '../../styles/booklet.module.css';
import Image from 'next/image';


// import data for the images:
import { slideshowBooklet  } from '../../data/graphic-design-portfolio-slideshow';


import { slideShowBooklet2 } from '../../data/graphic-design-portfolio-slideshow';





// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



export default function Slider () {

    return (<div className={styles.wrapper}>



    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >




      {slideShowBooklet2.map((item, index)=> {
        return  <SwiperSlide>
          <Image
          src={item.src}
          width={item.width}
          height={item.height}
          alt={item.alt}

        />  </SwiperSlide>;
      })}





      {/* <SwiperSlide><p>last</p></SwiperSlide> */}







    </Swiper>

    </div>);
}