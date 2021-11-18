import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section
      id='contact'
      className='md:w-8/12 md:mx-auto relative animate__animated animate__fadeInRight'
    >
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-600 rounded-lg overflow-hidden sm:mr-10 p-10 my-8 flex items-end justify-start relative shadow-lg'>
          <iframe
            width='100%'
            height='100%'
            title='map'
            className='absolute inset-0'
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: 'opacity(0.7)' }}
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11972.933640297904!2d2.165745619775391!3d41.39073715000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1634721579614!5m2!1sen!2ses'
          />
          <div className='bg-gray-200 text-gray-800 dark:text-gray-200 dark:bg-gray-900 opacity-80 relative flex flex-wrap py-6 rounded shadow-lg'>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-bold tracking-widest text-xs '>
                CURRENTLY BASED AT
              </h2>
              <p className='mt-1 dark:text-gray-400'>Barcelona, Spain</p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-bold tracking-widest text-xs'>
                EMAIL
              </h2>
              <a
                className='leading-relaxed dark:text-gray-400 hover:text-gray-600 dark:hover:text-white'
                href='mailto:felipovicc@gmail.com'
              >
                felipovicc@gmail.com
              </a>
              <h2 className='title-font font-bold  tracking-widest text-xs mt-4 '>
                PHONE
              </h2>
              <p className='leading-relaxed dark:text-gray-400'>
                +34 684 607 718
              </p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
