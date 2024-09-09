import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Custom arrows

// Sample image data
const images = [
  '/airbrb-bookings.png',
  '/airbrb-filters.png',
  '/airbrb-filtered.png',
  '/airbrb-booking.png',
  '/airbrb-ratings.png',
  '/airbrb-form.png',
  '/airbrb-edit.png',
];

export default function AirbrbImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <button className='slider-arrow slider-prev'><FaArrowLeft /></button>,
    nextArrow: <button className='slider-arrow slider-next'><FaArrowRight /></button>,
  };

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className='slider-item'>
            <Image
              src={src}
              alt={`Slide ${index}`}
              layout='responsive'
              width={1000}
              height={600}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
