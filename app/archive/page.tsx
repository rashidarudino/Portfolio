'use client';
import AirbrbImageSlider from '@/components/ui/image-slider.tsx/airbrb-image-slider';
import WaitupImageSlider from '@/components/ui/image-slider.tsx/waitup-image-slider';
import Image from 'next/image';
import React from 'react';
import './style.css'
import { FaReact, FaNodeJs, FaDatabase, FaJira, FaFigma } from 'react-icons/fa'; // Example icons

export default function Archive() {
  return (
    <main className='flex flex-col items-center justify-between p-4 gap-10'>
      <div className='nes-container with-title is-centered bg-blue-200 w-full max-w-screen-md fade-in-up'>
        <p className='title'>Archive</p>
        <p>
          Welcome to the archive of apps built on javascript! Here you can view
          my past web development projects.
        </p>
      </div>
      <div className='mt-5 w-full max-w-screen-md space-y-20 mb-40'>
        {/* Project 1 */}
        <div className='nes-container with-title bg-yellow-400 border-4 border-orange-500 slide-in-from-left'>
          <p className='title'>WaitUp!</p>
          <p>
            <strong>Year:</strong> 2024
          </p>
          <div className='flex items-center gap-2'>
            <FaFigma style={{ color: '#F24E1E', fontSize: '30px' }} />
            <p> Figma Protype</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaReact style={{ color: '#61DBFB', fontSize: '30px' }} />
            <p>React</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaDatabase style={{ color: 'green', fontSize: '30px' }} />
            <p>Real-time Supabase</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaJira style={{ color: '#0052CC', fontSize: '30px' }} />
            <p>Team collaboration with Jira</p>
          </div>
          <div className='mb-4'>
            <WaitupImageSlider />
          </div>
          <p>
            Engineered an innovative, scalable restaurant waiting system where I
            used the Material-UI framework to create these responsive vivid pages.
          </p>
        </div>

        {/* Project 2 */}
        <div className='nes-container with-title bg-sky-400 mb-5 p-4 slide-in-from-left'>
          <p className='title'>Slackr</p>
          <p>
            <strong>Year:</strong> 2023
          </p>
          <div className='mb-4'>
            <Image
              src='/slackr.png' // Update this path
              alt='Slack-Inspired Messaging App'
              width={600}
              height={400}
              layout='responsive'
            />
          </div>
          <p>
            A simple Slack-inspired messaging app with CRUD functionality. Key
            features that I learnt about were authentication, private/public
            channel invitations, pagination, message pinning, reacts and edits.
          </p>
        </div>

        {/* Project 3 */}
        <div className='nes-container with-title is-dark mb-5 p-4 fade-in-up'>
          <p className='title'>Airbnb-Inspired Booking App</p>
          <p>
            <strong>Year:</strong> 2023
          </p>
          <p>
            A booking app with dynamic multi-page functionality.
            Features included calendars and the ability to create, view, update,
            or remove booking listings.
          </p>
          <div className='mb-4'>
            <AirbrbImageSlider />
          </div>
          <p>
            Developed in a pair, focusing on interactive and user-friendly
            design. Picked up new things about filters, REST API and cool
            features such as x-charts and date pickers.
          </p>
        </div>
      </div>
    </main>
  );
}
