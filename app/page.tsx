'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaCubes,
  FaBook,
  FaDownload,
} from 'react-icons/fa'; // Import icons
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoFastFood } from 'react-icons/io5';
import { BiChalkboard } from 'react-icons/bi';
import { FaMessage } from 'react-icons/fa6';
import ContactForm from '@/components/ui/contact-form/contact-form';

export default function Home() {
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
  const { ref: resumeRef, inView: resumeInView } = useInView({
    triggerOnce: true,
  });

  const router = useRouter();

  return (
    <main className='flex flex-col items-center justify-center p-10 gap-24'>
      {/* Header Section */}
      <header className='nes-container with-title is-centered bg-white md:w-[45rem] shadow-lg rounded-lg p-6'>
        <motion.h1
          className='text-4xl font-bold text-blue-500'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Rashida Rudino
        </motion.h1>
        <motion.p
          className='text-lg text-gray-700'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Exploring the world of technology and creativity
        </motion.p>
      </header>

      {/* Profile Section */}
      <section ref={profileRef} className='w-full flex justify-center'>
        <motion.div
          className='nes-container with-title is-centered bg-blue-100 md:w-[45rem] shadow-lg rounded-lg p-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: profileInView ? 1 : 0,
            y: profileInView ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
        >
          <p className='title'>Profile</p>
          <div className='flex items-start space-x-4'>
            <Image
              src='/digital/digital-01.jpg'
              alt='User Avatar'
              className='nes-avatar is-large'
              style={{ imageRendering: 'pixelated', marginTop: '7rem' }}
              width={400}
              height={400}
            />
            <div className='nes-balloon from-left w-full max-w-md p-4'>
              <p>Welcome to my portfolio!</p>
              <p className='text-xs'>
                I'm excited to share some of the technological adventures I've
                embarked on. Enjoy your visit!
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section ref={educationRef} className='w-full flex justify-center'>
        <motion.div
          className='nes-container with-title is-centered bg-white md:w-[45rem] shadow-lg rounded-lg p-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: educationInView ? 1 : 0,
            y: educationInView ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
        >
          <p className='title'>Education & Work Experience</p>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center'>
              <FaGraduationCap fontSize={'5rem'} className='text-yellow-500' />
              <span className='mx-4'>
                Graduated as a UNSW Bachelor of Computer Science
              </span>
            </div>
            <div className='flex items-center'>
              <FaChalkboardTeacher
                fontSize={'5rem'}
                className='text-orange-500'
              />
              <span className='mx-4'>
                Tutoring at Cluey Learning for three years
              </span>
            </div>
            <div className='flex items-center'>
              <BiChalkboard fontSize={'5rem'} className='text-green-500' />
              <span className='mx-4'>Tutored at CSEducation in 2020</span>
            </div>
            <div className='flex items-center'>
              <IoFastFood fontSize={'5rem'} className='text-red-500' />
              <span className='mx-4'>
                Worked as an Ogalo Crew Member in 2019 as part of my VET course
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className='w-full flex justify-center'>
        <motion.div
          className='nes-container is-rounded bg-white md:w-[45rem] shadow-lg rounded-lg p-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className='flex flex-col items-center'>
            <Image
              width={100}
              height={100}
              src={'/axe-and-shield.webp'}
              alt='Axe & Shield'
            />
            <p className='text-center text-xl font-semibold mt-4'>My Skills</p>

            {/* Frontend Development */}
            <section className='mt-8'>
              <motion.h2
                className='text-2xl font-bold mb-2'
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: skillsInView ? 1 : 0,
                  y: skillsInView ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
              >
                Frontend Development
              </motion.h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <Link href='#' className='nes-badge bg-blue-200'>
                  <span className='is-primary'>JavaScript</span>
                </Link>
                <Link href='#' className='nes-badge bg-yellow-200'>
                  <span className='is-warning'>HTML/CSS</span>
                </Link>
                <Link href='#' className='nes-badge bg-gray-200'>
                  <span className='is-dark'>React.js</span>
                </Link>
                <Link href='#' className='nes-badge bg-green-200'>
                  <span className='is-success'>MUI</span>
                </Link>
                <Link href='#' className='nes-badge bg-red-200'>
                  <span className='is-error'>Tailwind</span>
                </Link>
                <Link href='#' className='nes-badge bg-blue-200'>
                  <span className='is-primary'>Bootstrap</span>
                </Link>
              </div>
            </section>

            {/* Backend Development */}
            <section className='mt-8'>
              <motion.h2
                className='text-2xl font-bold mb-2'
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: skillsInView ? 1 : 0,
                  y: skillsInView ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
              >
                Backend Development
              </motion.h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <Link href='#' className='nes-badge bg-gray-200'>
                  <span className='is-dark'>Node.js</span>
                </Link>
                <Link href='#' className='nes-badge bg-green-200'>
                  <span className='is-success'>Express.js</span>
                </Link>
                <Link href='#' className='nes-badge bg-red-200'>
                  <span className='is-error'>REST API</span>
                </Link>
                <Link href='#' className='nes-badge bg-blue-200'>
                  <span className='is-primary'>MySQL</span>
                </Link>
                <Link href='#' className='nes-badge bg-yellow-200'>
                  <span className='is-warning'>PostgreSQL</span>
                </Link>
                <Link href='#' className='nes-badge bg-gray-200'>
                  <span className='is-dark'>Apache2</span>
                </Link>
                <Link href='#' className='nes-badge bg-green-200'>
                  <span className='is-success'>Nginx</span>
                </Link>
              </div>
            </section>

            {/* Programming Languages */}
            <section className='mt-8'>
              <motion.h2
                className='text-2xl font-bold mb-2'
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: skillsInView ? 1 : 0,
                  y: skillsInView ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
              >
                Programming Languages
              </motion.h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <Link href='#' className='nes-badge bg-red-200'>
                  <span className='is-error'>Python</span>
                </Link>
                <Link href='#' className='nes-badge bg-blue-200'>
                  <span className='is-primary'>JavaScript</span>
                </Link>
                <Link href='#' className='nes-badge bg-yellow-200'>
                  <span className='is-warning'>Java</span>
                </Link>
                <Link href='#' className='nes-badge bg-green-200'>
                  <span className='is-success'>C#</span>
                </Link>
                <Link href='#' className='nes-badge bg-gray-200'>
                  <span className='is-dark'>C++</span>
                </Link>
                <Link href='#' className='nes-badge bg-red-200'>
                  <span className='is-error'>C</span>
                </Link>
              </div>
            </section>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section ref={projectRef} className='w-full flex justify-center  mb-20'>
        <motion.div
          className='nes-container with-title is-rounded bg-white md:w-[45rem] shadow-lg rounded-lg p-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: projectInView ? 1 : 0,
            y: projectInView ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
        >
          <p className='title'>Projects</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
            <div className='flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md'>
              <FaCubes className='text-4xl text-orange-600' />
              <h3 className='text-xl font-bold mt-2'>Datalogger</h3>
              <p className='text-center mt-1'>
                A datalogger that offers an interactive interface
              </p>
              <Link
                href='/archive#dl'
                className='mt-4 text-blue-600 hover:underline'
                onClick={() => router.push('/projects/project1')}
              >
                View Details
              </Link>
            </div>
            <div className='flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md'>
              <IoFastFood className='text-4xl text-blue-600' />
              <h3 className='text-xl font-bold mt-2'>WaitUp!</h3>
              <p className='text-center mt-1'>
                Restaurant Wait System built on React.js
              </p>
              <Link
                href='/archive#waitup'
                className='mt-4 text-blue-600 hover:underline'
                onClick={() => router.push('/projects/project1')}
              >
                View Details
              </Link>
            </div>
            <div className='flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md'>
              <FaMessage className='text-4xl text-green-600' />
              <h3 className='text-xl font-bold mt-2'>Slackr</h3>
              <p className='text-center mt-1'>Slack-inspired messaging app.</p>
              <Link
                href='/archive#slackr'
                className='mt-4 text-blue-600 hover:underline'
                onClick={() => router.push('/projects/project2')}
              >
                View Details
              </Link>
            </div>
            <div className='flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md'>
              <FaBook className='text-4xl text-red-600' />
              <h3 className='text-xl font-bold mt-2'>Airbrb</h3>
              <p className='text-center mt-1'>Airbnb-inspired booking app.</p>
              <Link
                href='/archive#airbrb'
                className='mt-4 text-blue-600 hover:underline'
                onClick={() => router.push('/projects/project3')}
              >
                View Details
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <section ref={resumeRef} className='w-full flex justify-center gap-6'>
        <motion.div
          className='nes-container with-title is-rounded bg-white md:w-[45rem] shadow-lg rounded-lg p-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: resumeInView ? 1 : 0,
            y: resumeInView ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
        >
          <p className='title'>Download Resume</p>
          <div className='flex flex-col items-center mt-4'>
            <div className='nes-balloon from-bottom w-full max-w-md text-center p-4'>
              <p className='text-lg font-bold mb-2'>Get to Know Me Better!</p>
              <p className='text-xs'>
                Download my resume to see a detailed account of my skills,
                experience, and achievements. Feel free to reach out for any
                inquiries!
              </p>
            </div>
            <a
              href='/rashida-rudino-resume-2024.pdf' // Replace with the path to your resume
              download='rashida-rudino-resume-2024.pdf'
              className='nes-btn is-success mt-6 flex items-center'
            >
              <FaDownload className='mr-2' />
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>
      <motion.div
        className='nes-container with-title is-rounded bg-white md:w-[45rem] shadow-lg rounded-lg p-6'
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: resumeInView ? 1 : 0,
          y: resumeInView ? 0 : 20,
        }}
        transition={{ duration: 0.6 }}
      >
        <ContactForm />
      </motion.div>
      {/* Add new sections */}
      <section className='w-full flex justify-center gap-6 mb-20'></section>
    </main>
  );
}
