"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
  { imgUrl: '/assets/images/hero-1.png', alt: 'iphone 15' },
  { imgUrl: '/assets/images/hero-2.png', alt: 'System'},
  { imgUrl: '/assets/images/hero-3.png', alt: 'lamp'},
  { imgUrl: '/assets/images/hero-4.png', alt: 'air fryer'},
  { imgUrl: '/assets/images/hero-5.png', alt: 'chair'},
]

const HeroCarousel = () => {
  return (
    <div className="hero-carousel sm:-mt-12 mt-1 bg-primary hover:scale-[1.1] ">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <img
            src={image.imgUrl}
            alt={image.alt}
            
            className="object-contain w-[484px] h-[484px] drop-shadow-xl z-40"
            key={image.alt}
          />
        ))}
      </Carousel>

      <Image 
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-[-110px] "
      />
    </div>
  )
}

export default HeroCarousel