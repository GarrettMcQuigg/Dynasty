import React from 'react';
// import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
// import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Rankings() {
  return (
    <div className='flex-col px-8 md:pr-8 text-center py-6'>
      <div className='mb-4 font-serif pb-4'>
        <div className='font-semibold tracking-wide leading-6'>
          <span className='title'>Seasonal Power Rankings</span>
        </div>
        <div className='text-[color:white] pt-2'>
          <ol className='flex-col list-decimal list-outside leading-8 pl-6 pt-2 text-center'>
            <div className='border-b-2 border-[color:#00ceb8] pb-1'>
              <li className='text-first-place'>ptmcclure</li>
              <li className='text-second-place'>Laberry</li>
              <li className='text-third-place'>GrantGru</li>
              <li>BabyBall</li>
            </div>
            <div className='pt-1'>
              <li>GarrettMcQuigg</li>
              <li>ZGianino</li>
              <li>JordanWGarrett</li>
              <li>KINGNIGEL23</li>
              <li>bpdow</li>
              <li>JBohne</li>
            </div>
          </ol>
        </div>
      </div>

      <div className='font-serif'>
        <div className='font-serif font-semibold tracking-wide'>
          <span className='title'>Dynasty Power Rankings</span>
        </div>
        <div className='text-[color:white] pt-2'>
          <ol className='flex-col list-decimal list-outside leading-8 pl-6 pt-2 text-center'>
            <li className='text-first-place'>
              ptmcclure <span></span>
            </li>
            <li className='text-second-place'>ZGianino</li>
            <li className='text-third-place'>bpdow</li>
            <li>GarrettMcQuigg</li>
            <li>Laberry</li>
            <li>BabyBall</li>
            <li>KINGNIGEL23</li>
            <li>GrantGru</li>
            <li>JBohne</li>
            <li>JordanWGarrett</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Rankings;
