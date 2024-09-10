'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link'; // Import Link from next/link
import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import {
  FaArchive,
  FaDeviantart,
  FaEtsy,
  FaHome,
  FaPaintBrush,
  FaQuestion,
} from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [activePath, setActivePath] = useState<string>(pathname);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Update activePath when pathname changes
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  // Handle clicks outside of the modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsShowModal(false);
      }
    }

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle modal toggle
  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  return (
    <header className='flex w-full justify-end p-5'>
      <div className='flex gap-4'>
        <Link href='/'>
          <button
            type='button'
            className={`nes-btn ${
              activePath === '/' || activePath === '/#'
                ? 'is-warning'
                : 'is-primary'
            }`}
          >
            <FaHome fontSize={'2rem'} />
          </button>
        </Link>

        <Link href='/about'>
          <button
            type='button'
            className={`nes-btn ${
              activePath.startsWith('/about') &&
              (activePath === '/about' || activePath.startsWith('/about#'))
                ? 'is-warning'
                : 'is-primary'
            }`}
          >
            <FaQuestion fontSize={'2rem'} />
          </button>
        </Link>

        <Link href='/archive'>
          <button
            type='button'
            className={`nes-btn ${
              activePath.startsWith('/archive') &&
              (activePath === '/archive' || activePath.startsWith('/archive#'))
                ? 'is-warning'
                : 'is-primary'
            }`}
          >
            <FaArchive fontSize={'2rem'} />
          </button>
        </Link>

        <Link href='/art'>
          <button
            type='button'
            className={`nes-btn ${
              activePath.startsWith('/art') &&
              (activePath === '/art' || activePath.startsWith('/art#'))
                ? 'is-warning'
                : 'is-primary'
            }`}
          >
            <FaPaintBrush fontSize={'2rem'} />
          </button>
        </Link>

        <button
          type='button'
          className='nes-btn is-primary'
          onClick={toggleModal}
          ref={buttonRef}
        >
          <i className='nes-icon trophy'></i>
        </button>
      </div>

      {isShowModal && (
        <div
          ref={modalRef}
          className='nes-dialog absolute top-20 bg-white z-10'
        >
          <div className='flex justify-end'>
            <button onClick={() => setIsShowModal(false)}>
              <i className='nes-icon close is-small'></i>
            </button>
          </div>
          <div className='p-3'>
            <p className='title text-sm'>Join the Mighty Alliance!</p>
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
                  <FaEtsy
                    className='text-4xl pixelated-icon'
                    style={{ color: '#F5B120' }}
                  />
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
