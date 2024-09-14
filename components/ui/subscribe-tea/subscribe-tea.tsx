'use client';

import Image from 'next/legacy/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SubscribeOrc() {
  return (
    <div className='fixed bottom-0 right-0 w-32 md:w-64 hidden sm:flex items-center'>
      <Link href={'https://rashidarudino.netlify.app/'}>
        <Image
          src={'/revit/house.gif'}
          priority
          width={300}
          height={250}
          alt='Orc'
        />
      </Link>
    </div>
  );
}
