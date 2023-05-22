import React from 'react';
import 'reactjs-popup/dist/index.css';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';

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
              <li className='text-first-place'>
                ptmcclure <HorizontalRuleOutlinedIcon />{' '}
              </li>
              <li className='text-second-place'>
                CooperKuppKlan <HorizontalRuleOutlinedIcon />
              </li>
              <li className='text-third-place'>
                GrantGru <HorizontalRuleOutlinedIcon />
              </li>
              <li>
                BabyBall <HorizontalRuleOutlinedIcon />
              </li>
            </div>
            <div className='pt-1'>
              <li>
                GarrettMcQuigg <HorizontalRuleOutlinedIcon />
              </li>
              <li>
                ZGianino <HorizontalRuleOutlinedIcon />
              </li>
              <li>
                JordanWGarrett <HorizontalRuleOutlinedIcon />
              </li>
              <li>
                KINGNIGEL23 <HorizontalRuleOutlinedIcon />
              </li>
              <li>
                bpdow <HorizontalRuleOutlinedIcon />
              </li>
              <li>
                Cum Guzzlers <HorizontalRuleOutlinedIcon />
              </li>
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
              ptmcclure <HorizontalRuleOutlinedIcon />
            </li>
            <li className='text-second-place'>
              ZGianino <HorizontalRuleOutlinedIcon />
            </li>
            <li className='text-third-place'>
              bpdow <HorizontalRuleOutlinedIcon />
            </li>
            <li>
              GarrettMcQuigg <HorizontalRuleOutlinedIcon />
            </li>
            <li>
              CooperKuppKlan <HorizontalRuleOutlinedIcon />
            </li>
            <li>
              BabyBall <HorizontalRuleOutlinedIcon />
            </li>
            <li>
              KINGNIGEL23 <HorizontalRuleOutlinedIcon />
            </li>
            <li>
              GrantGru <HorizontalRuleOutlinedIcon />
            </li>
            <li>
              Cum Guzzlers <HorizontalRuleOutlinedIcon />
            </li>
            <li>
              JordanWGarrett <HorizontalRuleOutlinedIcon />
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Rankings;
