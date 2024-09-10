import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// Sample image data
const images = [
  { original: '/dl-channels.webp', thumbnail: '/dl-channels.webp' },
  { original: '/dl-files.webp', thumbnail: '/dl-files.webp' },
  { original: '/dl-screen.webp', thumbnail: '/dl-screen.webp' },
];

export default function DlImageSlider() {
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
