import { Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Technology } from './Technology';
import { useBreakpointValue } from '@chakra-ui/react';
import { ITechnology } from '../../interfaces/ITechnology';

interface SlideTechnologiesProps {
    technologies: ITechnology[];
}

export function SlideTechnologies({ technologies }: SlideTechnologiesProps) {


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Swiper
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
            {technologies.map((tec, index) => (
                <SwiperSlide key={tec.name + index}>
                    <Technology imagePath={tec.imagePath} name={tec.name} rating={tec.rating} />
                </SwiperSlide>
            ))}

        </Swiper>
    );
}