'use client';

import Image from 'next/legacy/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
export default function SubscribeOrc() {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);

  return (
    <div className='fixed bottom-0 right-0 w-32 md:w-64'>
      {isShowDialog && (
        <div className='nes-balloon from-left w-44 p-0'>
          <p className='text-xs'>
            Hello!
          </p>
        </div>
      )}

      <Link href={'#'}>
        <Image
          onMouseEnter={() => setIsShowDialog(true)}
          onMouseLeave={() => setIsShowDialog(false)}
          src={'/bubble-tea.gif'}
          priority
          width={100}
          height={100}
          style={{ marginLeft: '10rem' }}
          alt='Orc'
        />
      </Link>
    </div>
  );
}
