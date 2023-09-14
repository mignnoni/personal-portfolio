import { Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { ProjectImage } from './ProjectImage';

interface ISlideProjectsImagesProps {
    paths: string[];
}

export function SlideProjectsImages({ paths }: ISlideProjectsImagesProps) {

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
                pauseOnMouseEnter: false,
                disableOnInteraction: false
            }}
            speed={700}
        >
            {paths.map((path, index) => (
                <SwiperSlide key={index} >
                    <ProjectImage imagePath={path} />
                </SwiperSlide>
            ))}

        </Swiper>
    );
}