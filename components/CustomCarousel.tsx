import lady from "@/public/lady.jpg"
import man1 from "@/public/man1.jpg"
import man2 from "@/public/man2.jpg"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CarouselItem from "./CarouselItem";
import scrapershot from "@/public/scrapershot.png"
import visshot from '@/public/visshot.png'
import dashshot from '@/public/dashshot.png'

const CustomCarousel = () => {
    const images = [
        lady, man1, man2
    ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 1024},
            items: 1,
        },
        desktop: {
            breakpoint: {max: 1024, min: 768},
            items: 1,
        },
        tablet: {
            breakpoint: {max: 768, min: 640},
            items: 1,
        },
        mobile: {
            breakpoint: {max: 640, min: 0},
            items: 1,
        },
    };

    const carouselData = [
        {
            imageUrl: scrapershot.src,
            title: 'We built some cool thing',
            background: 'gray-200',
            slug: 'lorem_ipsum'
        },
        {
            imageUrl: dashshot.src,
            title: 'We built some cool thing',
            background: 'gray-200',
            slug: 'lorem_ipsum'
        },
        {
            imageUrl: visshot.src,
            title: 'We built some cool thing',
            background: 'gray-200',
            slug: 'lorem_ipsum'
        },
    ]
    return (
        <Carousel infinite
                  containerClass='w-full'
                  ssr={true}
                  autoPlay={true}
                  autoPlaySpeed={4000}
                  transitionDuration={1500}
                  itemClass="px-4" responsive={responsive}>
            {carouselData.map(item => (
                <CarouselItem {...item} key={item.slug}/>
            ))}
        </Carousel>
    )
}

export default CustomCarousel