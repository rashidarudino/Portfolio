'use client';

import AirbrbImageSlider from '@/components/ui/image-slider/airbrb-image-slider';
import WaitupImageSlider from '@/components/ui/image-slider/waitup-image-slider';
import Image from 'next/image';
import React from 'react';
import './style.css';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJira,
  FaFigma,
  FaNetworkWired,
  FaGithub,
  FaSdCard,
  FaCode,
  FaJs,
  FaHtml5,
  FaCss3,
} from 'react-icons/fa';
import { SiPlatformio } from 'react-icons/si';
import DlImageSlider from '@/components/ui/image-slider/dl-image-slider';
import { FaMobileScreenButton } from 'react-icons/fa6';

export default function Archive() {
  return (
    <main className='flex flex-col items-center justify-between p-4 gap-10'>
      <div className='nes-container with-title is-centered bg-blue-200 w-full max-w-screen-md fade-in-up'>
        <p className='title'>Archive</p>
        <div className='flex flex-col md:flex-row items-start md:space-x-4'>
          <div className='nes-balloon from-right w-full max-w-md p-4'>
            Welcome to the archive of apps!
            <p className='text-xs'>
              Here you can see my past web frontend development projects built
              in JavaScript.
            </p>
          </div>
          <Image
            src='/digital/digital-01.jpg'
            alt='User Avatar'
            className='nes-avatar is-large'
            style={{ imageRendering: 'pixelated', marginLeft: '5rem' }}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className='mt-5 w-full max-w-screen-md space-y-10 md:space-y-20 mb-40'>
        {/* Project 0 */}
        <div className='nes-container with-title bg-orange-400 border-4 border-orange-600 slide-in-from-left'>
          <p id='dl' className='title'>
            Datalogger Client
          </p>
          <p>Year: 2024</p>
          <DlImageSlider />
          <br />
          <div className='overflow-x-auto'>
            <table
              style={{ border: '5px solid #7c2d12' }}
              className='nes-table text-xs is-bordered is-centered '
            >
              <thead>
                <tr>
                  <th>Tech Stack</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaReact style={{ color: '#61DBFB', fontSize: '30px' }} />
                    React.js
                  </td>
                  <td>Frontend library for building UIs</td>
                </tr>
                <tr>
                  <td>
                    <FaNetworkWired
                      style={{ color: 'green', fontSize: '30px' }}
                    />
                    WebSocket
                  </td>
                  <td>Protocol for real-time data transfer</td>
                </tr>
                <tr>
                  <td>
                    <FaGithub style={{ color: '#000000', fontSize: '30px' }} />
                    Git Version Control
                  </td>
                  <td>Distributed version control system</td>
                </tr>
                <tr>
                  <td>
                    <SiPlatformio
                      style={{ color: '#ff7f00', fontSize: '30px' }}
                    />
                    PlatformIO
                  </td>
                  <td>Embedded development platform</td>
                </tr>
                <tr>
                  <td>
                    <FaSdCard style={{ color: '#d8451f', fontSize: '30px' }} />
                    SD card storage
                  </td>
                  <td>
                    Web fileserver for file transfers and .csv and .json files
                    for persistence
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaCode
                      className='text-[#8CCBFF]'
                      style={{ fontSize: '30px' }}
                    />
                    <span>Libraries</span>
                  </td>
                  <td className='px-4 py-2' style={{ fontSize: '0.65rem' }}>
                    Mui, react-draggable, react-moveable, react-dnd,
                    react-canvas-gauges, react-gauges, and recharts ...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <p className='text-xs text-orange-900'>
            React client app running locally, connected to the ESP32 access
            point with real-time temperature sensor data coming in via
            WebSocket.
          </p>
        </div>

        {/* Project 1 */}
        <div className='nes-container with-title bg-yellow-400 border-4 border-orange-500 slide-in-from-left'>
          <p id='waitup' className='title '>
            WaitUp! App
          </p>
          <p>Year: 2024</p>
          <WaitupImageSlider />
          <br />
          <div className='overflow-x-auto'>
            <table
              style={{ border: '5px solid #c2410c' }}
              className='nes-table text-xs is-bordered is-centered '
            >
              <thead>
                <tr>
                  <th>Tech Stack</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaFigma
                      className='text-[#F24E1E]'
                      style={{ fontSize: '30px' }}
                    />
                    <span>Figma</span>
                  </td>
                  <td className='px-4 py-2'>Design and prototyping tool</td>
                </tr>
                <tr>
                  <td>
                    <FaReact
                      className='text-[#61DBFB]'
                      style={{ fontSize: '30px' }}
                    />
                    <span>React</span>
                  </td>
                  <td className='px-4 py-2'>
                    Frontend library for building UIs
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaDatabase
                      className='text-green-500'
                      style={{ fontSize: '30px' }}
                    />
                    <span>Supabase</span>
                  </td>
                  <td className='px-4 py-2'>Real-time database service</td>
                </tr>
                <tr>
                  <td>
                    <FaJira
                      className='text-[#0052CC]'
                      style={{ fontSize: '30px' }}
                    />
                    <span>Jira</span>
                  </td>
                  <td className='px-4 py-2'>Project and task management</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <p className=' text-xs text-orange-700'>
            Engineered an innovative, scalable restaurant waiting system where I
            used the Material-UI framework to create these responsive vivid
            pages.
          </p>
        </div>
        {/* Project 2 */}
        <div className='nes-container with-title bg-teal-400 border-4 border-teal-600 slide-in-from-left mb-5 p-4'>
          <p id='airbrb' className='title text-lg md:text-xl lg:text-2xl'>
            Airbrb Booking System
          </p>
          <p className='text-sm md:text-base lg:text-lg'>Year: 2023</p>
          <p className='text-xs md:text-sm lg:text-base text-teal-900'>
            An Airbnb-inspired booking app with dynamic multi-page
            functionality. Features included calendars and the ability to
            create, view, update, or remove booking listings.
          </p>
          <div className='mb-4'>
            <AirbrbImageSlider />
          </div>
          <div className='overflow-x-auto'>
            <table
              style={{ border: '5px solid #134e4a' }}
              className='nes-table text-xs is-bordered is-centered '
            >
              <thead>
                <tr>
                  <th>Tech Stack</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaReact style={{ color: '#61DBFB', fontSize: '24px' }} />
                    React.js
                  </td>
                  <td>Frontend library for building UIs</td>
                </tr>
                <tr>
                  <td>
                    <FaNodeJs style={{ color: '#68A063', fontSize: '24px' }} />
                    Node.js
                  </td>
                  <td>Backend runtime environment</td>
                </tr>
                <tr>
                  <td>
                    <FaCode style={{ color: '#8CCBFF', fontSize: '24px' }} />
                    JSON
                  </td>
                  <td>Used for storing and managing booking data</td>
                </tr>
                <tr>
                  <td>
                    <FaMobileScreenButton
                      style={{ color: '#61DBFB', fontSize: '24px' }}
                    />
                    <span>MUI</span>
                  </td>
                  <td className='px-2 py-1' style={{ fontSize: '0.65rem' }}>
                    Material-UI framework for styling components and UI
                    elements.
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>
          <p className='text-xs md:text-sm lg:text-base text-teal-900'>
            Developed in a pair, focusing on interactive and user-friendly
            design. Picked up new things about filters, REST API and cool
            features such as x-charts and date pickers.
          </p>
        </div>
        {/* Project 3 */}
        <div className='nes-container with-title bg-sky-400 mb-5 p-4 slide-in-from-left'>
          <p id='slackr' className='title'>
            Slackr Messaging App
          </p>
          <p>Year: 2023</p>
          <div className='mb-4'>
            <Image
              src='/slackr.png'
              alt='Slack-Inspired Messaging App'
              width={600}
              height={400}
              className='object-contain w-full h-auto'
            />
          </div>
          <p className='text-xs text-blue-900'>
            A simple Slack-inspired messaging app with CRUD functionality. Key
            features that I learnt about were authentication, private/public
            channel invitations, pagination, message pinning, reacts and edits.
          </p>
          <br />
          <div className='overflow-x-auto'>
            <table
              style={{ border: '5px solid #1d72b8' }}
              className='nes-table text-xs is-bordered is-centered '
            >
              <thead>
                <tr>
                  <th>Tech Stack</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FaHtml5 style={{ color: '#ee7632', fontSize: '30px' }} />
                    HTML5
                  </td>
                  <td>Standard markup language for creating web pages</td>
                </tr>
                <tr>
                  <td>
                    <FaCss3 style={{ color: '#1572B6', fontSize: '30px' }} />
                    CSS3
                  </td>
                  <td>Style sheet language for designing web pages</td>
                </tr>
                <tr>
                  <td>
                    <FaJs style={{ color: '#f0db4f', fontSize: '30px' }} />
                    JavaScript
                  </td>
                  <td>Programming language to create dynamic web pages</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
