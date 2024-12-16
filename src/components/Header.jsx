import React from 'react'
import Search from '../Assets/images/Icon.svg'
import Man from '../Assets/images/man.svg'
import Sharp from '../Assets/images/sharp.svg'
import Call from '../Assets/images/call.svg'
import '../App.css'

function Header() {
    return (
        <div>
            <header className='flex justify-between mb-[28px]'>
                <div>
                    <p className='text-[#97A5B8] mb-[6px] mt-[14.5px]'>Pages <strong className='text-white'>/ Dashboard</strong></p>
                    <strong className='text-white'>Dashboard</strong>
                </div>
                <div className='flex justify-between gap-[18px]'>
                    <div>
                        <img className='relative top-[33px] left-3' src={Search} alt="" width={20} />
                        <input className="flex  w-[199px] rounded-2xl border-[#E2E8F04D]  py-[10.75px] text-[#A0AEC0] border-[0.5px] pr-[13.49px] pl-[37.5px] focus:outline-none placeholder:text-[#A0AEC0] bg-[#0F1535]" placeholder='Type here...' type="text" />
                    </div>
                    <div className='flex items-center'>
                        <img className='w-[20px]' src={Man} alt="" />
                        <p className='text-[20px] text-[#718096]'>Sign In</p>
                    </div>
                    <img className='w-[20px]' src={Sharp} alt="" />
                    <img className='w-[20px]' src={Call} alt="" />
                </div>
            </header>
        </div>
    )
}

export default Header