'use client';

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

export default function Footer() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Function to handle clicks outside the modal
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsShowModal(false);
    }
  };

  // Set up event listener on mount
  useEffect(() => {
    if (isShowModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener on unmount or when modal is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShowModal]);

  return (
    <footer className='fixed bottom-5 left-5 z-20'>
      <button type='button' onClick={() => setIsShowModal(!isShowModal)}>
        <i className='nes-icon is-medium star'></i>
      </button>

      {isShowModal && (
        <div className='fixed inset-0 bg-gray-500/50 flex justify-center items-center z-10'>
          <div
            ref={modalRef}
            className='nes-dialog bg-white w-11/12 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl overflow-y-auto max-h-[90vh]'
          >
            <div className='flex justify-end p-2'>
              <button
                onClick={() => setIsShowModal(false)}
                aria-label='Close modal'
              >
                <i className='nes-icon close is-error'></i>
              </button>
            </div>
            <div className='flex flex-col justify-center items-center gap-5 p-4'>
              <i className='snes-jp-logo text-4xl md:text-5xl'></i>
              <p className='text-center'>Projects I'm currently working on:</p>

              <Link href={'/archive#dl'}>
                <div className='nes-container with-title is-dark w-full'>
                  <p className='title text-xs'>Datalogger</p>
                  <p className='text-xs'>
                    Allows a new way to interact with, calibrate, record and
                    watch real-time data coming from sensors hooked up to
                    microcontrollers.
                    <progress
                      className='nes-progress is-warning'
                      value='30'
                      max='100'
                    ></progress>
                  </p>
                </div>
              </Link>
              <Link href={'https://rashidarudino.netlify.app/'}>
                <div className='nes-container with-title w-full'>
                  <p className='title text-xs'>
                    Bento Portfolio
                  </p>
                  <p className='text-xs'>
                    A modern portfolio theme built using react and three.js.
                    Integrating it with blender to create some sleek ui.
                  </p>
                  <progress
                    className='nes-progress is-pattern'
                    value='30'
                    max='100'
                  ></progress>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
