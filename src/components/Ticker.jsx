import React from 'react';
import { useState, useEffect } from 'react';
import { getUsersRosters } from '../sleeper';

const Ticker = ({ teams }) => {
  const Clicked = () => {
    console.log(`${teams}`);
  };
  return (
    <div className='border border-border-blue bg-widget-bg p-2 w-screen' onClick={Clicked}>
      <div className='flex justify-center'>
        <div>{teams}</div>
      </div>
      <div className='text-center'>0-0</div>
    </div>
  );
};

export default Ticker;
