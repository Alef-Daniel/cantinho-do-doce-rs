import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import { Pagination, Autoplay, Navigation, EffectCoverflow, EffectCards} from 'swiper/modules';

interface ICarouselProps {
    slides: ReactNode[];
    effect: 'coverflow'  | 'none' | 'cards';
    pagination: boolean;
    navigation: boolean;
    slidesPerView: 'auto' | number;
    
}

export default function CarouselSwiper({ slides, effect, pagination, navigation, slidesPerView }: ICarouselProps) {
    return (
        <Swiper
        effect={effect}
        grabCursor={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}

            centeredSlides={true}
        slidesPerView={slidesPerView}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={navigation}
            pagination={{
                enabled: pagination,
            }}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow, EffectCards ]}
            className={`mySwiper w-full flex flex-row justify-center items-center `}
        >
            {slides.map((slide, index) => (
                <SwiperSlide  key={index} className='flex flex-row justify-center items-center gap-20 w-full'>
                    {slide}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
