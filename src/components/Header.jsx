import React from 'react';

function Header() {
  return (
    <div className='relative text-[color:white] pt-6 pb-4 font-serif'>
      <div className='flex items-center py-6'>
        <div className='flex justify-center flex-1'>
          <div className='font-semibold tracking-wide leading-6'>
            <span className='league-title text-sm sm:text-md md:text-lg lg:text-xl'>Dopamine LR Fantasy Football League</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
