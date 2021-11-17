import React, { useEffect, useState } from 'react';
import { MdMarkEmailUnread } from 'react-icons/md';
import { HiSun, HiMoon } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = ({ isDark, toggleDark }) => {
  const [showMenu, setShowMenu] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='text-gray-300 bg-gray-700 dark:bg-gray-800 md:sticky top-0 z-10 animate__animated animate__fadeInDown shadow-lg'>
      <div className='order-0 mx-6 py-4 flex items-center justify-between flex-wrap'>
        <div>
          <a
            href='#about'
            className='font-medium text-white md:ml-3 text-xl mb-2'
          >
            Felipe Noriega
          </a>
        </div>
        {showMenu && (
          <nav className='flex flex-1 flex-column md:flex-row items-center justify-between order-3 md:order-2 mt-2 md:mt-0'>
            <div className='md:ml-14'>
              <a href='#projects' className='mx-2 hover:text-white'>
                Portfolio
              </a>
              <a href='#skills' className='mx-2 hover:text-white'>
                Skills
              </a>
            </div>
            <div className='mx-2'>
              <a
                href='#contact'
                className='flex border border-gray-500 ml-2 py-1 px-2 focus:outline-none hover:text-white hover:bg-gray-500 rounded text-base'
              >
                <MdMarkEmailUnread size={24} className='mr-2' />
                Contact
              </a>
            </div>
          </nav>
        )}
        <div className='flex flex-2 md:order-3 order-2 justify-center items-center'>
          <button
            className='md:hidden border border-gray-500 ml-2 py-1 px-1.5 focus:outline-none hover:text-white hover:bg-gray-500 rounded text-base'
            onClick={() => setShowMenu(!showMenu)}
          >
            <GiHamburgerMenu size={24} />
          </button>
          <button
            className='border border-gray-500 ml-2 py-1 px-1.5 focus:outline-none hover:text-white hover:bg-gray-500 rounded text-base'
            onClick={toggleDark}
          >
            {isDark ? (
              <HiSun size={24} className='animate__animated animate__fadeIn' />
            ) : (
              <HiMoon size={24} className='animate__animated animate__fadeIn' />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
