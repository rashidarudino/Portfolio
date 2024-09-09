import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Art() {
  return (
    <main className='flex flex-col items-center justify-between p-10 gap-10'>
      <div className='nes-container with-title is-centered bg-blue-200 md:w-[45rem]'>
        <p className='title'>Arts and Architecture</p>
        Welcome to the Art page! A gallery of pixels, digital works, crochet and
        3D models. Here you can find various art projects.
      </div>
    </main>
  );
}
