'use client';

import { useInView } from 'react-intersection-observer';
import {
  SiGithub,
  SiN8N,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';
import './styles.css';

export default function About() {
  const { ref: profileRef, inView: profileInView } = useInView({
    triggerOnce: true,
  });
  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
  });

  return (
    <main className='flex flex-col items-center justify-center p-5 sm:p-10 gap-10'>
      <section
        ref={profileRef}
        className={`nes-container bg-slate-100 text-center fade-in p-4 sm:p-8 rounded-md ${
          profileInView ? 'fade-in-visible' : ''
        }`}
      >
        <h1 className='text-2xl sm:text-3xl font-bold mb-4'>About This Site</h1>
        <p className='text-xs'>Retro x Nintendo x Modern</p>
        <p className='mb-4 text-sm sm:text-base'>
          This site was built with passion for frontend development, media
          art, pixels, and vibrant colors.
        </p>
      </section>

      <section
        ref={educationRef}
        className={`nes-container bg-slate-100 w-full max-w-4xl mt-8 mb-20 fade-in p-4 sm:p-8 rounded-md ${
          educationInView ? 'fade-in-visible' : ''
        }`}
      >
        <h2 className='title text-xl sm:text-2xl font-bold mb-4'>Tech Stack</h2>
        <table
          style={{
            border: '5px solid #104873',
            backgroundColor: '#F1E5D8',
            borderCollapse: 'collapse',
          }}
          className='nes-table text-xs sm:text-sm is-bordered is-centered w-full'
        >
          <thead>
            <tr style={{ borderBottom: '3px solid #8B5E3C' }}>
              <th style={{ border: '1px solid #8B5E3C' }}>Tech Stack</th>
              <th style={{ border: '1px solid #8B5E3C' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                borderBottom: '1px solid #000000',
                backgroundColor: '#000000',
              }}
            >
              <td style={{ color: '#FFFFFF' }}>
                <SiNextdotjs style={{ fontSize: '30px' }} />
                <span>Next.js</span>
              </td>
              <td style={{ color: '#FFFFFF' }}>
                React framework for server-side rendering
              </td>
            </tr>
            <tr
              style={{
                borderBottom: '1px solid #FF3366',
                backgroundColor: '#E1E8ED',
              }}
            >
              <td style={{ color: '#FF3366' }}>
                <SiN8N style={{ fontSize: '30px', color: '#FF3366' }} />
                <span>NES.css</span>
              </td>
              <td style={{ color: '#FF3366' }}>Retro-styled CSS framework</td>
            </tr>
            <tr
              style={{
                borderBottom: '1px solid #06B6D4',
                backgroundColor: '#F7FAFC',
              }}
            >
              <td style={{ color: '#06B6D4' }}>
                <SiTailwindcss style={{ fontSize: '30px', color: '#06B6D4' }} />
                <span>Tailwind CSS</span>
              </td>
              <td style={{ color: '#06B6D4' }}>Utility-first CSS framework</td>
            </tr>
            <tr
              style={{
                borderBottom: '1px solid #3178C6',
                backgroundColor: '#F7FAFC',
              }}
            >
              <td style={{ color: '#3178C6' }}>
                <SiTypescript style={{ fontSize: '30px', color: '#3178C6' }} />
                <span>TypeScript</span>
              </td>
              <td style={{ color: '#3178C6' }}>Typed superset of JavaScript</td>
            </tr>
            <tr
              style={{
                borderBottom: '1px solid #8DD6F9',
                backgroundColor: '#1C78C0',
              }}
            >
              <td style={{ color: '#FFFFFF' }}>
                <SiWebpack style={{ fontSize: '30px', color: '#8DD6F9' }} />
                <span>Webpack</span>
              </td>
              <td style={{ color: '#FFFFFF' }}>
                Module bundler for JavaScript
              </td>
            </tr>
            <tr
              style={{
                borderBottom: '1px solid #000000',
                backgroundColor: '#FFFFFF',
              }}
            >
              <td style={{ color: '#000000' }}>
                <SiGithub style={{ fontSize: '30px', color: '#000000' }} />
                <span>GitHub Pages</span>
              </td>
              <td style={{ color: '#000000' }}>
                Workflow and runners for deployment
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
