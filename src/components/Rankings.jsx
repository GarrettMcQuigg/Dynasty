import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Rankings() {
  return (
    <div className='flex-col justify-center text-center px-8 md:pr-8 '>
      <div className='border border-border-blue rounded-[16px] bg-widget-bg mb-4 p-6 font-serif'>
        <div className='font-semibold tracking-wide leading-6'>
          <span className='title'>Seasonal Power Rankings</span>
        </div>
        <div className='text-[color:white] pt-2'>
          <ol className='flex-col list-decimal list-inside leading-6 pl-6 pt-2 text-left text-md cursor-pointer'>
            <Popup trigger={<li className='text-first-place'>ptmcclure</li>} position='left center'>
              <div>---INSERT TEAM HERE---</div>
            </Popup>
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

      <div className='border border-border-blue rounded-[16px] bg-widget-bg mb-4 p-6 font-serif'>
        <div className='font-serif font-semibold tracking-wide'>
          <span className='title'>Dynasty Power Rankings</span>
        </div>
        <div className='text-[color:white] pt-2'>
          <ol className='flex-col list-decimal list-inside leading-6 pl-6 pt-2 text-left text-md cursor-pointer'>
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
