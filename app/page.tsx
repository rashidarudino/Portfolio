'use client';

import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaCubes,
  FaBook,
  FaDownload,
  FaJava,
} from 'react-icons/fa'; // Import icons
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoFastFood } from 'react-icons/io5';
import { BiChalkboard } from 'react-icons/bi';
import { FaC, FaMessage } from 'react-icons/fa6';
import ContactForm from '@/components/ui/contact-form/contact-form';
import FormPage from '@/components/ui/form/form';
import { useEffect, useState } from 'react';
import {
  SiApache,
  SiBootstrap,
  SiCplusplus,
  SiCsharp,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNodemon,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { Canvas } from '@react-three/fiber';

export default function Home() {
  const [screenSize, setScreenSize] = useState('small');

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
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
  });

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setScreenSize('small');
      } else if (width <= 768) {
        setScreenSize('medium');
      } else if (width <= 1024) {
        setScreenSize('large');
      } else {
        setScreenSize('extraLarge');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageSize = {
    small: 150,
    medium: 200,
    large: 250,
    extraLarge: 300,
  }[screenSize];

  const imagePosition =
    screenSize === 'small' || screenSize === 'medium' ? 'w-full' : '';

  return (
    <main className='flex flex-col items-center justify-center p-10 gap-24 mb-36'>
      {/* Header Section */}
      <header className='nes-container with-title is-centered bg-white md:w-[45rem] shadow-lg rounded-lg p-6'>
        <motion.h1
          className='text-4xl font-bold text-blue-500'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Rashida Rudino
        </motion.h1>
        <motion.p
          className='text-lg text-gray-700'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Exploring the world of technology and creativity
        </motion.p>
      </header>
      {/* Profile Section */}
      <section ref={profileRef} className='w-full flex justify-center'>
        <motion.div
          className='nes-container with-title is-centered bg-blue-500 md:w-[45rem] shadow-lg rounded-lg p-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: profileInView ? 1 : 0,
            y: profileInView ? 0 : 20,
          }}
          transition={{ duration: 0.1 }}
        >
          <p className='title'>Profile</p>
          <div
            className={`flex flex-col md:flex-row items-start md:space-x-4 ${
              screenSize === 'large' || screenSize === 'extraLarge'
                ? 'lg:flex-row-reverse'
                : ''
            }`}
          >
            {/* Balloon */}
            <div className={`nes-balloon w-full max-w-md p-4`}>
              Welcome to my portfolio!
              <p className='text-xs'>
                I'm excited to share some of the technological adventures I've
                embarked on. Enjoy your visit!
              </p>
            </div>
            {/* Image */}
            <div className={`flex justify-center ${imagePosition}`}>
              <Image
                src='/toycube.webp'
                alt='User Avatar'
                className='nes-avatar is-large'
                style={{ imageRendering: 'pixelated' }}
                width={imageSize}
                height={imageSize}
              />
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
          transition={{ duration: 0.2 }}
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
          className='nes-container is-rounded bg-[#d4cfbe] md:w-[45rem] shadow-lg rounded-lg p-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 20 }}
          transition={{ duration: 0.2 }}
        >
          <div className='flex flex-col items-center'>
            <Image
              width={100}
              height={100}
              src={'/axe-and-shield.webp'}
              alt='Axe & Shield'
            />
            <p className='text-center text-xl font-semibold mt-4'>My Skills</p>
            {/* START of SKILLS >>> */}
            <section className='mt-8 gap'>
              <motion.h2
                className='text-2xl font-bold mb-4 text-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: skillsInView ? 1 : 0,
                  y: skillsInView ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
              >
                Frontend Development
              </motion.h2>
              <div className='text-xs gap-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4'>
                <div className='nes-badge bg-[#1E90FF] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <SiJavascript size={20} />
                  </span>
                  <span className='text-black'>JavaScript</span>
                </div>
                <div className='nes-badge bg-[#FFD700] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-black'>
                    <SiHtml5 size={20} />
                  </span>
                  <span className='text-black'>HTML/CSS</span>
                </div>
                <div className='nes-badge bg-[#61DAFB] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-black'>
                    <SiReact size={20} />
                  </span>
                  <span className='text-black'>React.js</span>
                </div>
                <div className='nes-badge bg-[#007FFF] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <SiMui size={20} />
                  </span>
                  <span className='text-black'>MUI</span>
                </div>
                <div className='nes-badge bg-[#38BDF8] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-black'>
                    <SiTailwindcss size={20} />
                  </span>
                  <span className='text-black'>Tailwind</span>
                </div>
                <div className='nes-badge bg-[#7952B3] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <SiBootstrap size={20} />
                  </span>
                  <span className='text-black'>Bootstrap</span>
                </div>
              </div>
            </section>

            <section className='mt-8'>
              <motion.h2
                className='text-2xl font-bold mb-4 text-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: skillsInView ? 1 : 0,
                  y: skillsInView ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
              >
                Backend Development
              </motion.h2>
              <div className='text-xs grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 '>
                <div className='nes-badge bg-[#4E5D6C] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <SiNodemon size={20} />
                  </span>
                  <span className='text-black'>Node.js</span>
                </div>
                <div className='nes-badge bg-[#1F6F55] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <SiExpress size={20} />
                  </span>
                  <span className='text-black'>Express.js</span>
                </div>
                <div className='nes-badge bg-[#FF6347] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-black'>
                    <TbApi size={20} />
                  </span>
                  <span className='text-black'>REST API</span>
                </div>
                <div className='nes-badge bg-[#00758F] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <SiMysql size={20} />
                  </span>
                  <span className='text-black'>MySQL</span>
                </div>
                <div className='nes-badge bg-[#F5F5F5] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-black'>
                    <SiApache size={20} />
                  </span>
                  <span className='text-black'>Apache2</span>
                </div>
                <div className='nes-badge bg-[#003B77] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <SiPostgresql size={20} />
                  </span>
                  <span className='text-black'>PostgreSQL</span>
                </div>
              </div>
            </section>

            <section className='mt-8 pb-10'>
              <motion.h2
                className='text-2xl font-bold mb-4 text-center'
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: skillsInView ? 1 : 0,
                  y: skillsInView ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
              >
                Languages
              </motion.h2>
              <div className='text-xs grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10 '>
                <div className='nes-badge bg-[#306998] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <SiPython size={20} />
                  </span>
                  <span className='text-black'>Python</span>
                </div>
                <div className='nes-badge bg-[#F7E7B4] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-black'>
                    <FaJava size={20} />
                  </span>
                  <span className='text-black'>Java</span>
                </div>
                <div className='nes-badge bg-[#6D6E6F] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <SiCsharp size={20} />
                  </span>
                  <span className='text-black'>C#</span>
                </div>
                <div className='nes-badge bg-[#6D6E6F] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <SiCplusplus size={20} />
                  </span>
                  <span className='text-black'>C++</span>
                </div>
                <div className='nes-badge bg-[#3F6C3F] is-icon flex items-center space-x-2 p-2 rounded-md shadow-md'>
                  <span className='flex items-center text-white'>
                    <FaC size={20} />
                  </span>
                  <span className='text-black'>C</span>
                </div>
              </div>
            </section>
            {/* <<< END of SKILLS  */}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section ref={projectRef} className='w-full flex justify-center'>
        <motion.div
          className='nes-container with-title is-rounded bg-white md:w-[45rem] shadow-lg rounded-lg p-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: projectInView ? 1 : 0,
            y: projectInView ? 0 : 20,
          }}
          transition={{ duration: 0.2 }}
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
          transition={{ duration: 0.2 }}
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

      <section ref={contactRef} className='w-full flex justify-center gap-6'>
        <motion.div
          className='nes-container with-title is-rounded bg-white md:w-[45rem] shadow-lg rounded-lg p-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: contactInView ? 1 : 0,
            y: contactInView ? 0 : 20,
          }}
          transition={{ duration: 0.2 }}
        >
          <p className='title'>Contact Me</p>
          <ContactForm />
        </motion.div>
      </section>
      {/* Add new sections */}
      <section ref={formRef} className='w-full flex justify-center gap-6'>
        <motion.div
          className='nes-container with-title is-rounded bg-white sm:w-[35rem] md:w-[45rem] lg:w-[55rem] shadow-lg rounded-lg p-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: formInView ? 1 : 0,
            y: formInView ? 0 : 20,
          }}
          transition={{ duration: 0.2 }}
        >
          <h1 className='title'>Know your coffee?</h1>
          <FormPage />
        </motion.div>
      </section>
    </main>
  );
}
