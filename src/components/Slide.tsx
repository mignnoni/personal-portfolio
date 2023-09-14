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
            slidesPerView={isWideVersion ? 3 : 1}
            loop={true}
            autoplay={{
                pauseOnMouseEnter: false,
                disableOnInteraction: false
            }}
            speed={700}
        >
            <SwiperSlide>
                <Technology imagePath='net_logo.png' name='.NET' rating={5} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='react.png' name='React' rating={5} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='angular.svg' name='Angular' rating={5} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='angular.svg' name='Angularjs' rating={5} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='next.png' name='Typescript' rating={5} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='next.png' name='REST API' rating={5} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='next.png' name='SQL Server' rating={5} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='next.png' name='Next.js' rating={4} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='next.png' name='Tailwind' rating={4} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='next.png' name='MongoDB' rating={3} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='next.png' name='Docker' rating={3} />
            </SwiperSlide>
            <SwiperSlide>
                <Technology imagePath='next.png' name='Node.js' rating={3} />
            </SwiperSlide>
        </Swiper>
    );
}