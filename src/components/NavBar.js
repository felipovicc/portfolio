import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { HiSun, HiMoon } from 'react-icons/hi'

const NavBar = ({ isDark, toggleDark }) => {
    return (
        <header className='dark:bg-gray-800 bg-gray-300 md:sticky top-0 z-10 animate__animated animate__fadeInDown'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <div className='title-font font-medium dark:text-white mb-4 md:mb-0'>
                    <a href='#about' className='ml-3 text-xl'>
                        Felipe Noriega
                    </a>
                </div>
                <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center'>
                    <a href='#projects' className='mr-5 hover:text-white'>
                        Portfolio
                    </a>
                    <a href='#skills' className='mr-5 hover:text-white'>
                        Skills
                    </a>
                    {/* <a href='#testimonials' className='mr-5 hover:text-white'>
                        Testimonials
                    </a> */}
                </nav>
                <a
                    href='#contact'
                    className='inline-flex items-center border border-gray-600 py-1 px-3 focus:outline-none hover:text-white hover:bg-gray-600 rounded text-base mt-4 md:mt-0'>
                    &nbsp; Contact Me
                    <FaArrowRight size={16} className='ml-1' />
                </a>
                <div className="inline-flex ml-16">
                    <button
                        className='border-gray-600	mx-auto p-1 border focus:outline-none hover:text-white hover:bg-gray-600 rounded-full '
                        onClick={toggleDark}>

                        {isDark ?
                            <HiSun size={36} className="h-6 w-6 animate__animated animate__fadeIn" />
                            :
                            <HiMoon size={36} className="h-6 w-6 animate__animated animate__fadeIn" />
                        }
                    </button>
                </div>
            </div>
        </header >
    )
}

export default NavBar
