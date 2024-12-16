import clsx from "clsx"
import React from "react";
import { MANY_LISTS2 } from "../static";

const UsersChart = () => {
    return (
        <div className=" flex flex-col ">
            <div className="mb-[36px]">
                <p className='text-white font-[700] text-[18px] mb-[6px] leading-[25.2px]'>Active Users</p>
                <p className='text-[#8998AE] font-[400] text-[14px] leading-[19.6px]'><span className='text-[#029C6C] font-[700] text-[14px] leading-[19.6px]'>(+23) </span>than last week</p>
            </div>
            <div className="flex justify-around">
                {
                    MANY_LISTS2?.map(item => (
                        <div>
                            <div className="">
                                <div>
                                    <div className="flex gap-[11px]">
                                        <img className="w-[25px] bg-[#0075FF] rounded-[6px] p-[6.25px] mb-[6.5px]" src={item.img} alt="" width={15} height={15} />
                                        <p className='text-[#8998AE] font-[400] text-[14px] leading-[21px]'>{item.title}</p>
                                    </div>
                                    <p className='text-white font-[700] text-[18px] mb-[6px] leading-[25.2px]'>{item.price}</p>
                                </div>
                            </div>
                            <div className="w-[200px] bg-[#1E293B] rounded-full h-2.5">
                                <div
                                    className="bg-blue-500 h-2.5 rounded-full"
                                    style={{ width: `${item.price}%` }}
                                ></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UsersChart;
