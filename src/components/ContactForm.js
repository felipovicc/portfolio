import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdDone, MdErrorOutline } from 'react-icons/md';

const ContactForm = () => {
  const STATUS = {
    success: 'SUCCESS',
    pending: 'PENDING',
    failure: 'FAILURE',
  };

  const [status, setStatus] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data }),
    })
      .then((resp) => {
        resp.ok ? setStatus(STATUS.success) : setStatus(STATUS.failure);
        console.log(resp);
      })
      .catch((error) => console.error(error));
  };

  return status ? (
    status === 'SUCCESS' ? (
      <div className='m-auto text-green-400 animate__animated animate__fadeIn'>
        <MdDone size={100} className='mx-auto my-2' />
        <div className=''>
          <h2 className='text-xl'>Thank you for your message.</h2>
          <h3>I'll get back at you as soon as posible!</h3>
        </div>
      </div>
    ) : (
      <div className='m-auto text-red-500 animate__animated animate__fadeIn'>
        <MdErrorOutline size={100} className='mx-auto my-2' />
        <div className=''>
          <h2 className='text-xl'>There has been an error</h2>
          <h3>Please, try again later.</h3>
        </div>
      </div>
    )
  ) : (
    <div className='lg:w-1/3 md:w-1/2'>
      <h2 className=' mb-1 font-medium title-font text-3xl dark:text-white'>
        Contact me:
      </h2>
      <p className='leading-relaxed mb-5'>
        If you&apos;d like to work with me, please get in touch with me with the
        form underneath.
      </p>
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
      >
        <div className='relative mb-4'>
          <label htmlFor='name' className='leading-7 text-sm dark:text-white'>
            Name
          </label>
          <input
            {...register('name', { required: true, placeholder: 'Name' })}
            className='placeholder-gray-500 dark:placeholder-gray-400 w-full bg-gray-200 dark:bg-gray-800 rounded border border-gray-500  focus:ring-2 focus:ring-green-400 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.name && (
            <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
              Invalid field!
            </span>
          )}
        </div>
        <div className='relative mb-4'>
          <label htmlFor='email' className='leading-7 text-sm dark:text-white'>
            Email
          </label>
          <input
            {...register('email', {
              required: true,
              placeholder: 'your@email.com',
              pattern:
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            })}
            className='placeholder-gray-500 dark:placeholder-gray-400 w-full bg-gray-200 dark:bg-gray-800 rounded border border-gray-500  focus:ring-2 focus:ring-green-400 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.email && (
            <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
              Invalid field!
            </span>
          )}
        </div>
        <div className='relative mb-4'>
          <label
            htmlFor='message'
            className='leading-7 text-sm dark:text-white'
          >
            Message
          </label>
          <textarea
            {...register('message', {
              required: true,
              placeholder: 'Your message...',
            })}
            className='placeholder-gray-500 dark:placeholder-gray-400 w-full bg-gray-200 dark:bg-gray-800 rounded border border-gray-500  focus:ring-2 focus:ring-green-400 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
          {errors.message && (
            <span className='flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>
              Invalid field!
            </span>
          )}
        </div>
        <input
          type='submit'
          value='Submit'
          className='bg-gray-200 hover:text-gray-100 dark:bg-gray-900 text-gray-600 border-gray-600 border dark:text-gray-100 dark:hover:bg-gray-600 hover:bg-gray-700 py-2 px-6 focus:outline-none  rounded text-lg mt-4 md:mt-0 shadow-lg'
        />
      </form>
    </div>
  );
};

export default ContactForm;
