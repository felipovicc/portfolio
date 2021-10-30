import React from 'react'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='bg-gray-300 dark:bg-gray-800 animate__animated animate__fadeInUp'>
            <div className='container mx-auto p-5 flex flex-wrap flex-col sm:flex-row'>
                <p className='text-md text-center sm:text-left'>© 2021 Copyright:
                    <a href='https://github.com/felipovicc' className=' ml-1 hover:text-gray-500 dark:hover:text-white' target='_blank' rel='noopener noreferrer'> Felipe Noriega</a>
                </p>
                <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
                    <a href='https://github.com/felipovicc' className=' hover:text-gray-600 dark:hover:text-white' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={24} />
                    </a>
                    <a href='https://www.linkedin.com/in/felipenl92/' className='ml-3 hover:text-gray-600 dark:hover:text-white' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedinIn size={24} />
                    </a>
                </span>
            </div>
        </div>
    )
}
