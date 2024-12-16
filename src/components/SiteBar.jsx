import React from 'react';
import SiteLogo from '../Assets/images/siteLogo.svg';
import '../App.css';
import { NAVBAR_LISTS } from '../static';

function SiteBar() {
    return (
        <div className='w-[100%] h-[100vh] bg-custom-gradient rounded-[20px] pt-[36px]'>
            <a href="/">
                <img className='w-[135px] mx-auto mb-[31.5px]' src={SiteLogo} alt="Site Logo" />
                <div className='border-[1px] line-gradient w-[80%] mb-[22.5px] mx-auto'></div>
                <ul className='mx-[22px] flex flex-col items-start gap-6'>
                    {NAVBAR_LISTS?.map((item, index) => (
                        <li key={item.id || index}>
                            <a className='flex items-center gap-4' href="">
                                <img className='nav-img rounded-xl w-[40px] p-[7.5px] bg-[#0075FF]' src={item.img} alt={item.title} />
                                <p className='font-400 text-[20px] leading-[14px] text-white'>{item.title}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </a>
        </div>
    );
}

export default SiteBar;
