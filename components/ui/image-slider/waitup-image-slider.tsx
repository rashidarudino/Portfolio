import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Custom arrows

// Sample image data
const images = [
  '/waitup-figma1.png',
  '/waitup-figma2.png',
  '/waitup-home.png',
  '/waitup-dashboard.png',
  '/waitup-stat.png',
  '/waitup-drawer.png',
  '/waitup-item.png',
  '/waitup-category.png',
];

export default function WaitupImageSlider() {
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
