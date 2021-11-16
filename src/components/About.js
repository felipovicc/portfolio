import React from 'react';
// import { FaArchive, FaAt } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate__animated animate__fadeInLeft'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white '>
            Hi, I&apos;m Felipe.
            <br className=' lg:inline-block' />
            Frontend developer and graphic designer.
          </h1>
          <p className='mb-8 leading-relaxed'></p>
          <div className='flex justify-center items-center'>
            <a
              href='#contact'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg items-center shadow-md'
            >
              {/* <FaAt size={24} className='h-8 mr-4' /> */}
              Work with me
            </a>
            <a
              href='#projects'
              className='ml-4 inline-flex bg-gray-100 dark:bg-gray-900 border border-gray-500 py-2 px-6 focus:outline-none hover:text-white hover:bg-gray-500 dark:hover:bg-gray-500 rounded text-lg shadow-md'
            >
              {/* <FaArchive size={24} className='h-8 mr-4' /> */}
              Some of my work
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/3 w-5/6 animate__animated animate__fadeInRight'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src='./coding.svg'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
