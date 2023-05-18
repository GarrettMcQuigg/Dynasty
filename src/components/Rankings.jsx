import React from 'react';

function Rankings() {
  return (
    <div className='flex-col justify-center text-center'>
      <div className='border border-border-blue rounded-[16px] bg-widget-bg mb-4 p-6 font-serif text-lg'>
        <h3 className='font-bold text-[color:white]'>Seasonal Power Rankings</h3>
        <div className='text-[color:white] pt-2'>
          <ol className='flex-col list-decimal list-inside leading-6 pl-6 text-left text-md cursor-pointer'>
            <li className='text-first-place'>ptmcclure</li>
            <li className='text-second-place'>CooperKuppKlan</li>
            <li className='text-third-place'>GrantGru</li>
            <li>BabyBall</li>
            <li>GarrettMcQuigg</li>
            <li>ZGianino</li>
            <li>JordanWGarrett</li>
            <li>KINGNIGEL23</li>
            <li>bpdow</li>
            <li>Cum Guzzlers</li>
          </ol>
        </div>
      </div>

      <div className='border border-border-blue rounded-[16px] bg-widget-bg mb-4 p-6 font-serif text-lg'>
        <h3 className='font-bold text-[color:white]'>Dynasty Power Rankings</h3>
        <div className='text-[color:white] pt-2'>
          <ol className='flex-col list-decimal list-inside leading-6 pl-6 text-left text-md cursor-pointer'>
            <li className='text-first-place'>ptmcclure</li>
            <li className='text-second-place'>ZGianino</li>
            <li className='text-third-place'>bpdow</li>
            <li>GarrettMcQuigg</li>
            <li>CooperKuppKlan</li>
            <li>BabyBall</li>
            <li>KINGNIGEL23</li>
            <li>GrantGru</li>
            <li>Cum Guzzlers</li>
            <li>JordanWGarrett</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Rankings;
