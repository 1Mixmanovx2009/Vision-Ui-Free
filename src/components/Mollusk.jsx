import React from 'react'
import Arrow from '../Assets/images/arrow.svg'


function Mollusk() {
  return (
    <div>
        <div className='mollusk w-[570px] h-[300px] p-[20px]'>
        <div className='mb-[100px]'>
          <p className='text-[#A0AEC0] font-medium'>Welcome back,</p>
          <h4 className='text-[28px] font-bold text-white'>Mark Johnson</h4>
          <p className='text-[#A0AEC0] w-[190px] font-medium'>Glad to see you again!
            Ask me anything.</p>
        </div>
        <div className='flex items-center gap-[10px]'>
          <p className='text=[12px] font-[400] text-white'>Tap to record</p>
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Mollusk