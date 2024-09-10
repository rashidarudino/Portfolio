import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// Sample image data
const images = [
  {
    original: '/airbrb-bookings.webp',
    thumbnail: '/airbrb-bookings.webp',
  },
  {
    original: '/airbrb-filters.webp',
    thumbnail: '/airbrb-filters.webp',
  },
  {
    original: '/airbrb-filtered.webp',
    thumbnail: '/airbrb-filtered.webp',
  },
  {
    original: '/airbrb-booking.webp',
    thumbnail: '/airbrb-booking.webp',
  },
  {
    original: '/airbrb-ratings.webp',
    thumbnail: '/airbrb-ratings.webp',
  },
  {
    original: '/airbrb-form.webp',
    thumbnail: '/airbrb-form.webp',
  },
  {
    original: '/airbrb-edit.webp',
    thumbnail: '/airbrb-edit.webp',
  },
];

export default function AirbrbImageSlider() {
  return (
    <div className='slider-container'>
      <ImageGallery
        items={images}
        showThumbnails={true}
        showPlayButton={false}
        showFullscreenButton={false}
        autoPlay={false}
        showBullets={true}
      />
    </div>
  );
}
