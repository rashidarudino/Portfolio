'use client';

import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the default styles
import './styles.css';
import Image from 'next/image';
interface ArtItem {
  original: string;
}
type ArtCategories = {
  pixels: ArtItem[];
  digital: ArtItem[];
  gameDev: ArtItem[];
  crochet: ArtItem[];
  revit: ArtItem[];
};

const artCategories: ArtCategories = {
  pixels: [
    { original: '/pixels/c-pixel-16.gif' },
    { original: '/pixels/c-pixel-00.gif' },
    { original: '/pixels/c-pixel-01.gif' },
    { original: '/pixels/c-pixel-02.gif' },
    { original: '/pixels/c-pixel-03.gif' },
    { original: '/pixels/c-pixel-04.gif' },
    { original: '/pixels/c-pixel-05.gif' },
    { original: '/pixels/c-pixel-06.gif' },
    { original: '/pixels/c-pixel-07.gif' },
    { original: '/pixels/c-pixel-08.gif' },
    { original: '/pixels/c-pixel-09.gif' },
    { original: '/pixels/c-pixel-10.gif' },
    { original: '/pixels/c-pixel-11.gif' },
    { original: '/pixels/c-pixel-12.gif' },
    { original: '/pixels/c-pixel-13.gif' },
    { original: '/pixels/c-pixel-14.gif' },
    { original: '/pixels/c-pixel-15.gif' },
    { original: '/pixels/c-pixel-17.gif' },
    { original: '/pixels/c-pixel-18.gif' },
    { original: '/pixels/c-pixel-19.gif' },
    { original: '/pixels/c-pixel-20.gif' },
    { original: '/pixels/c-pixel-21.gif' },
    { original: '/pixels/c-pixel-22.gif' },
    { original: '/pixels/c-pixel-23.gif' },
    { original: '/pixels/c-pixel-24.gif' },
    { original: '/pixels/c-pixel-25.gif' },
    { original: '/pixels/c-pixel-26.gif' },
    { original: '/pixels/c-pixel-27.gif' },
    { original: '/pixels/c-pixel-28.gif' },
    { original: '/pixels/c-pixel-29.gif' },
    { original: '/pixels/c-pixel-30.gif' },
    { original: '/pixels/c-pixel-31.gif' },
    { original: '/pixels/c-pixel-32.gif' },
    { original: '/pixels/c-pixel-33.gif' },
    { original: '/digital/digital-09.jpg' },
  ],
  digital: [
    { original: '/digital/digital-04.jpg' },
    { original: '/digital/digital-00.jpg' },
    { original: '/digital/digital-01.jpg' },
    { original: '/digital/digital-02.jpg' },
    { original: '/digital/digital-03.jpg' },
    { original: '/digital/digital-05.jpg' },
    { original: '/digital/digital-06.jpg' },
    { original: '/digital/digital-07.jpg' },
    { original: '/digital/digital-08.jpg' },

    { original: '/digital/digital-10.jpg' },
    { original: '/digital/digital-11.jpg' },
    { original: '/digital/digital-12.jpg' },
    { original: '/digital/digital-13.jpg' },
    { original: '/digital/digital-14.jpg' },
    { original: '/digital/digital-15.jpg' },
    { original: '/digital/digital-16.jpg' },
    { original: '/digital/digital-17.jpg' },
  ],
  gameDev: [
    { original: '/game-dev/summer.png' },
    { original: '/game-dev/maze.png' },
    { original: '/game-dev/blueprint.png' },
  ],
  crochet: [
    { original: '/crochet/crochet-00.jpg' },
    { original: '/crochet/crochet-01.jpg' },
    { original: '/crochet/crochet-02.jpg' },
  ],
  revit: [
    { original: '/revit/revit-house-01.jpg' },
    { original: '/revit/revit-house-02.jpg' },
    { original: '/revit/revit-house-03.jpg' },
    { original: '/revit/revit-house-04.jpg' },
    { original: '/revit/revit-house-05.jpg' },
    { original: '/revit/revit-house-06.jpg' },
    { original: '/revit/revit-house-07.jpg' },
    { original: '/revit/revit-house-08.jpg' },
    { original: '/revit/revit-house-09.jpg' },
    { original: '/revit/revit-house-10.jpg' },
    { original: '/revit/revit-apartment-01.jpg' },
    { original: '/revit/revit-apartment-02.jpg' },
    { original: '/revit/revit-apartment-03.jpg' },
    { original: '/revit/revit-apartment-04.jpg' },
  ],
};

const categoryDescriptions: { [key in keyof ArtCategories]: string } = {
  pixels:
    'Explore my pixel art commissions ordered by Deviantart users and other animation works.',
  digital:
    'Discover a range of digital artwork including illustrations and graphics.',
  gameDev:
    'Check out my game development art, featuring game assets and concepts.',
  crochet:
    'Browse through my crochet creations, showcasing various handmade items.',
  revit:
    'View my architectural designs and 3D models created with Revit from my BIM UNSW GenEd course.',
};

// Function to generate a thumbnail from the original image
const generateThumbnail = (src: string) => {
  return src; // Use the original image as a thumbnail
};

export default function Art() {
  const [currentCategory, setCurrentCategory] = useState('pixels');

  // Generate image objects for the gallery
  // Generate image objects for the gallery
  const images = artCategories[currentCategory as keyof ArtCategories].map(
    (item) => ({
      original: item.original,
      thumbnail: generateThumbnail(item.original), // Use the original as thumbnail
      description: currentCategory === 'pixels' ? 'pixel-art-image' : '',
    })
  );

  return (
    <main className='flex flex-col items-center justify-between p-4 gap-10'>
      <div className='nes-container with-title is-centered bg-blue-200 w-full max-w-screen-md fade-in-up'>
        <p className='title'>Art Gallery</p>
        <div className='flex items-start space-x-4'>
          <div className='nes-balloon from-right w-full max-w-md p-4'>
            Welcome to the Art page!
            <p className='text-xs'>
              When I am not coding, I like to crochet, play the piano, or draw.
            </p>
          </div>
          <Image
            src='/digital/digital-01.jpg'
            alt='User Avatar'
            className='nes-avatar is-large'
            style={{ imageRendering: 'pixelated', marginTop: '6rem' }}
            width={400}
            height={400}
          />
        </div>
      </div>

      <section className='nes-container w-3/4 h-3/4 bg-slate-50 mt-8 mb-36'>
        <h2 className='text-2xl font-bold mb-4'>Art Categories</h2>
        <p className='text-xs block'>
          Tip: you can hold down the arrow keys to browse.
        </p>
        <div className='button-container'>
          {Object.keys(artCategories).map((category) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`nes-btn is-normal text-xs px-4 bordered py-2 rounded ${
                currentCategory === category ? 'is-success' : 'is-normal'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className='category-description'>
          <p>{categoryDescriptions[currentCategory as keyof ArtCategories]}</p>
        </div>
        <ImageGallery
          items={images}
          showFullscreenButton={true}
          showPlayButton={true}
          showThumbnails={true}
          showBullets={true}
          showNav={true}
          thumbnailPosition='bottom'
          renderItem={(item) => (
            <div className={`image-gallery-image ${item.description}`}>
              <Image
                src={item.original}
                alt=''
                layout='responsive'
                width={800}
                height={600}
                priority
                style={
                  currentCategory === 'pixels'
                    ? { maxHeight: '20vh', maxWidth: '100vw', marginBottom: '2rem' }
                    : {
                        maxHeight: '80vh',
                        maxWidth: '100vw',
                        objectFit: 'scale-down',
                      }
                }
              />
            </div>
          )}
        />
      </section>
    </main>
  );
}
