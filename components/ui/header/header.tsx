'use client';
import './styles.css';
import React, { useState } from 'react';
import { FaDeviantart, FaEtsy } from 'react-icons/fa';
export default function Header() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <header className='flex w-full justify-end p-5'>
      <button
        type='button'
        className='nes-btn is-primary'
        onClick={() => setIsShowModal(!isShowModal)}
      >
        <i className='nes-icon trophy'></i>
      </button>

      {isShowModal && (
        <div className='nes-dialog absolute top-20 bg-white z-10'>
          <div className='flex justify-end'>
            <button onClick={() => setIsShowModal(false)}>
              <i className='nes-icon close is-small'></i>
            </button>
          </div>
          <div className='p-3'>
            <p className='title text-sm'>Join the Mighty Horde!</p>
            <div className='flex gap-2 justify-center items-center'>
              <a
                href='https://github.com/rashidarudino'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button type='button' className='nes-btn'>
                  <i className='nes-icon github'></i>
                </button>
              </a>
              <a
                href='mailto:rashidarudino@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button type='button' className='nes-btn'>
                  <i className='nes-icon gmail'></i>
                </button>
              </a>
              <a
                href='https://www.deviantart.com/aquasparkles'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button type='button' className='nes-btn'>
                  <FaDeviantart
                    className='text-4xl pixelated-icon'
                    style={{ color: '#4C8C2E' }}
                  />
                </button>
              </a>
              <a
                href='https://www.etsy.com/shop/plopbird'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button type='button' className='nes-btn'>
                  <FaEtsy className='text-4xl pixelated-icon' style={{ color: '#F5B120' }} />
                </button>
              </a>
              <a
                href='https://www.linkedin.com/in/rrudino'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button type='button' className='nes-btn'>
                  <i className='nes-icon linkedin'></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
