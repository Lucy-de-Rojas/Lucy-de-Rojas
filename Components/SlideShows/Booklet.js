import styles from '../../styles/booklet.module.css';
import Image from 'next/image';


// import data for the images:
// import { slideshowBooklet  } from '../../data/graphic-design-portfolio-slideshow';


// import { slideShowBooklet2 } from '../../data/graphic-design-portfolio-slideshow';



import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Lazy, EffectFlip, EffectFade, EffectCreative, EffectCards, EffectCoverflow } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/lazy';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-coverflow';




const widthSingle = "900";
const heightSingle = "663";
const altMain = "Benefits of Membership booklet 2018: ";
const srcMainLink = '/portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet';







SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Lazy, EffectFlip, EffectFade, EffectCreative, EffectCoverflow]);



export default function Slider () {



  //


  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    }
  }
//


    return (<div className={styles.wrapper}>



    <Swiper

      modules={[Navigation, Pagination, Scrollbar, A11y,Lazy]}
      navigation
      Lazy
      effect='coverflow'
      pagination={{ clickable: true,    renderBullet: (index, className) => {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }}}
      scrollbar={{ draggable: true }}



      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >





















<SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet1.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 1'

          />
          </SwiperSlide>





      <SwiperSlide>

        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet2.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 2'

        />
      </SwiperSlide>




      <SwiperSlide>

        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet3.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 3'

        />
      </SwiperSlide>


      <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet4.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 4'

          />
          </SwiperSlide>



          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet5.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 5'

          />
          </SwiperSlide>



          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet6.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 6'

          />
          </SwiperSlide>


          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet7.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 7'

          />
          </SwiperSlide>


          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet8.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 8'

          />
          </SwiperSlide>


          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet9.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 9'

          />
          </SwiperSlide>



          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet10.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 10'

          />
          </SwiperSlide>




          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet11.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 11'

          />
          </SwiperSlide>




          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet12.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 12'

          />
          </SwiperSlide>




          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet13.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 13'

          />
          </SwiperSlide>




          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet14.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 14'

          />
          </SwiperSlide>


          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet15.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 15'

          />
          </SwiperSlide>



          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet16.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 16'

          />
          </SwiperSlide>


          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet17.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 17'

          />
          </SwiperSlide>


          <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet18.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 18'

          />
          </SwiperSlide>



               <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet19.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 19'

          />
          </SwiperSlide>




     <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet20.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 20'

          />
          </SwiperSlide>





     <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet21.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 21'

          />
          </SwiperSlide>





     <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet22.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 22'

          />
          </SwiperSlide>




               <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet23.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 23'

          />
          </SwiperSlide>







     <SwiperSlide>
        <Image
          src="/Portfolio/pdfs/booklets/CSSCMembershipBooklet/LowRes/CSSCMembershipBenefitsBooklet24.jpg"
          width={widthSingle}
          height={heightSingle}
          alt='Membership Benefits Booklet page 24'

          />
          </SwiperSlide>










    </Swiper></div>);}
    // END