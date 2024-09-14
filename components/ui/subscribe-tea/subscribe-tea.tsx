'use client';

import Image from 'next/legacy/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight, FaPlane } from 'react-icons/fa';
import { SiThreedotjs } from 'react-icons/si';

export default function SubscribeOrc() {
  return (
    <div className='fixed bottom-0 right-0 w-32 flex items-center'>
      <Link href={'https://rashidarudino.netlify.app/'}>
        <div className='nes-balloon from-right w-24 animate-bounce'>
          <p className='text -ml-4'>Click</p>
        </div>
        <Image
          src={'/revit/house.gif'}
          priority
          width={150}
          height={100}
          alt='Orc'
        />
      </Link>
    </div>
  );
}
