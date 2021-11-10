import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const validateForm = () => {
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (validateForm) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', name: name, email, message }),
      }).catch((error) => console.error(error));
    }
  };

  return (
    <section id='contact' className='relative'>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-600 rounded-lg overflow-hidden sm:mr-10 p-10 my-8 flex items-end justify-start relative'>
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
          <div className='bg-gray-300 text-gray-800 dark:text-gray-300 dark:bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md '>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold tracking-widest text-xs '>
                CURRENTLY BASED AT
              </h2>
              <p className='mt-1'>Barcelona, Spain</p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold tracking-widest text-xs'>
                EMAIL
              </h2>
              <a
                className='leading-relaxed hover:text-gray-600 dark:hover:text-white'
                href='mailto:felipovicc@gmail.com'
              >
                felipovicc@gmail.com
              </a>
              <h2 className='title-font font-semibold  tracking-widest text-xs mt-4 '>
                PHONE
              </h2>
              <p className='leading-relaxed'>+34 684 607 718</p>
            </div>
          </div>
        </div>
        <form
          netlify='true'
          name='contact'
          onSubmit={handleSubmit}
          className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
        >
          <h2 className='sm:text-4xl text-3xl mb-1 font-medium title-font dark:text-white'>
            Contact me:
          </h2>
          <p className='leading-relaxed mb-5'>
            If you&apos;d like to work with me, please get in touch with me with
            the form underneath.
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm dark:text-white'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your name'
              className='placeholder-gray-500 dark:placeholder-gray-400 w-full bg-gray-300 dark:bg-gray-800 rounded border border-gray-500  focus:ring-2 focus:ring-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='email'
              className='leading-7 text-sm dark:text-white'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='your@email.com'
              className='placeholder-gray-500 dark:placeholder-gray-400 w-full bg-gray-300 dark:bg-gray-800 rounded border border-gray-500  focus:ring-2 focus:ring-blue-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-sm dark:text-white'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='placeholder-gray-500 dark:placeholder-gray-400 w-full bg-gray-300 dark:bg-gray-800 rounded border border-gray-500 focus:ring-2 focus:ring-blue-500 h-32 text-base outline-none py-1 px-3 leading-6 transition-colors duration-200 ease-in-out resize-none	overflow-y-auto'
              placeholder='Your message'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white hover:bg-blue-600 py-2 px-6 focus:outline-none  rounded text-lg mt-4 md:mt-0'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
