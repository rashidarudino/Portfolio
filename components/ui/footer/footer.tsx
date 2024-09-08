'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function Footer() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isShowPastProjectsModal, setIsShowPastProjectsModal] =
    useState<boolean>(false);

  return (
    <footer className='fixed bottom-5 left-5'>
      <button type='button' onClick={() => setIsShowModal(!isShowModal)}>
        <a className='nes-btn' href='#'>
          Projects
        </a>
      </button>

      <button
        type='button'
        onClick={() => setIsShowPastProjectsModal(!isShowPastProjectsModal)}
        className='ml-4'
      >
        <a className='nes-btn' href='#'>
          Art
        </a>
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
              <p>My Projects:</p>

              <Link href={'#'}>
                <div className='nes-container with-title is-dark'>
                  <p className='title'>Datalogger</p>
                  <p>
                    The Toycube Datalogger allows you to interact with
                    whiteboard components, calibrate, record, and watch
                    real-time data coming from sensors hooked up to
                    microcontrollers.
                  </p>
                </div>
              </Link>

              <Link href={'#'}>
                <div className='nes-container with-title is-dark'>
                  <p className='title'>http://toycube.com.au</p>
                  <p>
                    My go-to personal blog hosted using Apache2, Svelte, Astro,
                    MDX, and Adminer. Server runs on a RaspPi5.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isShowPastProjectsModal && (
        <div className='fixed inset-0 bg-gray-500/50 flex justify-center items-center z-10'>
          <div className='nes-dialog w-[40rem] bg-white'>
            <div className='flex justify-end'>
              <button onClick={() => setIsShowPastProjectsModal(false)}>
                <i className='nes-icon close is-small'></i>
              </button>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
              <i className='nes-icon is-large archive'></i>{' '}
              {/* Use an appropriate NES icon */}
              <p>Past Projects:</p>
              <Link href={'#'}>
                <div className='nes-container with-title is-dark'>
                  <p className='title'>Old Project 1</p>
                  <p>Description of old project 1.</p>
                </div>
              </Link>
              <Link href={'#'}>
                <div className='nes-container with-title'>
                  <p className='title'>Digital Art and Architecture</p>
                  <p>
                    A gallery of pixels, animations, digital media, crochet, and
                    3D models.
                  </p>
                </div>
              </Link>
              <Link href={'#'}>
                <div className='nes-container with-title is-dark'>
                  <p className='title'>Old Project 3</p>
                  <p>Description of old project 3.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
