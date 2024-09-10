import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// Sample image data
const images = [
  { original: '/waitup-figma1.webp', thumbnail: '/waitup-figma1.webp' },
  { original: '/waitup-figma2.webp', thumbnail: '/waitup-figma2.webp' },
  { original: '/waitup-home.webp', thumbnail: '/waitup-home.webp' },
  { original: '/waitup-dashboard.webp', thumbnail: '/waitup-dashboard.webp' },
  { original: '/waitup-stat.webp', thumbnail: '/waitup-stat.webp' },
  { original: '/waitup-drawer.webp', thumbnail: '/waitup-drawer.webp' },
  { original: '/waitup-item.webp', thumbnail: '/waitup-item.webp' },
  { original: '/waitup-category.webp', thumbnail: '/waitup-category.webp' },
];

export default function WaitupImageSlider() {
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
