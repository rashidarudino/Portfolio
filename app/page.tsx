import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-10 gap-10'>
      <h1 className='text-center'>
        Are you looking to become a true web dev warrior?
      </h1>

      <div className='nes-container with-title is-centered bg-blue-200 md:w-[45rem]'>
        <p className='title'>Profile</p>
        <p>
          My time tutoring students at Cluey Learning has sparked a lot of
          creativity in me. With my recent Computer Science degree, I'm excited
          to share some of the technological adventures I've embarked on. Feel
          free to explore and discover what I've been working on!
        </p>
      </div>

      <div className='nes-container with-title is-centered bg-white md:w-[45rem]'>
        <p className='title'>Education</p>
        Bachelor of <strong>Computer Science</strong> at UNSW Sydney Kensington
        Campus, 2024 August.
      </div>

      <div className='nes-container is-rounded bg-white'>
        <div className='flex flex-col items-center justify-center'>
          <Image
            width={100}
            height={100}
            src={'/axe-and-shield.webp'}
            alt='Axe & Shield'
          />
          <p className='text-center'>These are my skills</p>

          {/* Frontend Development */}
          <h2 className='text-center mt-4 mb-2'>Frontend Development</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <Link href='#' className='nes-badge'>
              <span className='is-primary'>JavaScript</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-warning'>HTML/CSS</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-dark'>React.js</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-success'>MUI</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-error'>Astro</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-primary'>Svelte</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-warning'>Next.js</span>
            </Link>
          </div>

          {/* Backend Development */}
          <h2 className='text-center mt-4 mb-2'>Backend Development</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <Link href='#' className='nes-badge'>
              <span className='is-dark'>Node.js</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-success'>Express.js</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-error'>REST API</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-primary'>MySQL</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-warning'>PostgreSQL</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-dark'>Apache2</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-success'>Nginx</span>
            </Link>
          </div>

          {/* Programming Languages */}
          <h2 className='text-center mt-4 mb-2'>Programming Languages</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <Link href='#' className='nes-badge'>
              <span className='is-error'>C++</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-primary'>Python</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-warning'>Rust</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-dark'>Shell</span>
            </Link>
          </div>

          {/* Tools & Frameworks */}
          <h2 className='text-center mt-4 mb-2'>Tools & Frameworks</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <Link href='#' className='nes-badge'>
              <span className='is-success'>Git</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-error'>Postman API</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-primary'>Jira</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-warning'>CI/CD</span>
            </Link>
          </div>

          {/* Game & App Development */}
          <h2 className='text-center mt-4 mb-2'>Game & App Development</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <Link href='#' className='nes-badge'>
              <span className='is-dark'>Revit</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-success'>Unreal</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-error'>Unity2D</span>
            </Link>
            <Link href='#' className='nes-badge'>
              <span className='is-primary'>PowerApps</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
