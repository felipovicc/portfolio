import React from 'react';
import { projects } from '../assets/data';

import { FaLaptopCode } from 'react-icons/fa';

const Projects = () => {
  return (
    <section
      id='projects'
      className='body-font animate__animated animate__fadeInRight'
    >
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <FaLaptopCode size={48} className='mx-auto inline-block mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white'>
            Some of my previous work
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Find some of my projects that have been developed using React.js and
            JavaScript.
          </p>
        </div>
        <div className='flex flex-wrap -m-4 rounded'>
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={project.image}
              className='sm:w-1/2 w-100 p-4 rounded'
            >
              <div className='flex relative h-96'>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover object-center rounded'
                  src={project.image}
                />
                <div className='px-8 py-10 relative z-10 w-full border-2 rounded border-gray-500 bg-gray-300 dark:bg-gray-900 opacity-0 hover:opacity-90  overflow-y-auto scroll'>
                  <h2 className='tracking-widest text-lg title-font font-bold text-green-400 mb-1 uppercase'>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-lg font-medium dark:text-white mb-3'>
                    {project.title}
                  </h1>
                  <p className='leading-relaxed'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
