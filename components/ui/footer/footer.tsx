'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function Footer() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <footer className='fixed bottom-5 left-5'>
      <button type='button' onClick={() => setIsShowModal(!isShowModal)}>
        <i className='nes-icon is-medium star'></i>
      </button>

      {isShowModal && (
        <div className='fixed inset-0 bg-gray-500/50 flex justify-center items-center z-10'>
          <div className='nes-dialog w-[40rem] bg-white'>
            <div className='flex justify-end'>
              <button onClick={() => setIsShowModal(false)}>
                <i className='nes-icon close is-small'></i>
              </button>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
              <i className='snes-jp-logo'></i>
              <p>Projects I'm currently working on:</p>

              <Link href={'/archive#dl'}>
                <div className='nes-container with-title is-dark'>
                  <p className='title'>Datalogger</p>
                  <p className='text-xs'>
                    Allows a new way to interact with, callibrate, record and
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
              <Link href={'#'}>
                <div className='nes-container with-title'>
                  <p className='title'>http://toycube.com.au</p>
                  <p className='text-xs'>
                    My go-to personal blog hosted using Apache2, Svelte, Astro,
                    MDX and Adminer. Server runs on a RaspPi5.
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
