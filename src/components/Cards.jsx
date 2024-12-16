import React from 'react'
import { MANY_LISTS } from '../static'


function Cards() {
    return (
        <div>
            <div>
                <ul className='flex justify-between gap-[24px] mb-[23.5px]'>
                    {
                    MANY_LISTS?.map(item => (
                        <li className='card-gradient flex w-[382px] p-[17.5px] rounded-[20px] justify-between'>
                            <div>
                                <p className='text-[#A0AEC0]'>{item.title}</p>
                                <p className='text-[#01B574]'><strong className='text-white font-700 text-[18px]'>{item.price}</strong> {item.prise}</p>
                            </div>
                            <img className='p-[11.25px] rounded-[12px]  bg-[#0075FF]' src={item.img} alt="" />
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Cards