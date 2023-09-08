import { Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Technology } from './Technologies/Technology';
import { useBreakpointValue } from '@chakra-ui/react';

export function Slide() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

    return (
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={isWideVersion ? 50 : 20}
          slidesPerView={isWideVersion ? 3 : 2}
          loop={true}
          autoplay={true}
        >
          <SwiperSlide >
            <Technology imagePath='net_logo.png' name='.NET' rating={5}/>
          </SwiperSlide>
          <SwiperSlide>
            <Technology imagePath='react.png' name='React' rating={5}/>
          </SwiperSlide>
          <SwiperSlide>
            <Technology imagePath='angular.svg' name='Angular' rating={5}/>
          </SwiperSlide>
          <SwiperSlide>
            <Technology imagePath='angular.svg' name='Angularjs' rating={5}/>
          </SwiperSlide>
          <SwiperSlide>
            <Technology imagePath='next.png' name='Next.js' rating={4}/>
          </SwiperSlide>
        </Swiper>
      );
}