import React from 'react';
import { skills } from '../assets/data';

import { HiOutlineChip, HiBadgeCheck, HiCode } from 'react-icons/hi';
import { MdDesignServices } from 'react-icons/md';

const Skils = () => {
  const getSkillIcon = (type) => {
    const iconStyle = 'text-blue-500 dark:text-blue-400 flex-shrink-0 mr-4';
    const iconSize = 24;
    switch (type) {
      case 'development':
        return <HiCode size={iconSize} className={iconStyle} />;
      case 'design':
        return <MdDesignServices size={iconSize} className={iconStyle} />;
      default:
        return <HiBadgeCheck size={iconSize} className={iconStyle} />;
    }
  };

  const renderSkill = (skill) => {
    return (
      <div key={skill.name} className='p-2 sm:w-1/2 w-full '>
        <div className='bg-gray-300  dark:bg-gray-800 rounded flex p-4 h-full items-center shadow-md'>
          {getSkillIcon(skill.type)}
          <span className='title-font font-medium dark:text-white'>
            {skill.name}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id='skills' className='animate__animated animate__fadeInLeft'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='text-center mb-20'>
          <HiOutlineChip size={48} className='inline-block mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font dark:text-white mb-4'>
            Skills &amp; Technologies
          </h1>
          <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center'>
          {skills.map((skill) => renderSkill(skill))}
        </div>
      </div>
    </section>
  );
};

export default Skils;
