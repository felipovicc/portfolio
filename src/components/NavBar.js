import React from 'react'
import { FaAt } from 'react-icons/fa'
import { HiSun, HiMoon } from 'react-icons/hi'

const NavBar = ({ isDark, toggleDark }) => {
    return (
        <header className='bg-gray-800 md:sticky top-0 z-10 animate__animated animate__fadeInDown'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <div className='title-font font-medium text-white mb-4 md:mb-0'>
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
                    className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base mt-4 md:mt-0'>
                    <FaAt size={16} className='ml-1' />
                    &nbsp; Contact Me
                </a>
                <div className="inline-flex ml-16">
                    <button className='border-gray-700	mx-auto p-1 bg-gray-800 border focus:outline-none hover:text-white hover:bg-gray-700 rounded-full '>

                        {isDark ?
                            <HiMoon size={36} className="h-6 w-6 animate__animated animate__fadeIn" onClick={toggleDark} />
                            :
                            <HiSun size={36} className="h-6 w-6 animate__animated animate__fadeIn" onClick={toggleDark} />
                        }
                    </button>
                </div>
            </div>
        </header >
    )
}

export default NavBar
