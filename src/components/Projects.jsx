import React from 'react';
import Circle from '../Assets/images/circle.svg';
import More from '../Assets/images/more_vert.svg';
import '../App.css';
import { PROJEKTS_LISTS2 } from '../static';

function Projects() {
    return (
        <div className="grid2 mb-[30px] p-[28px] w-full rounded-[20px]">
            <div className="mb-[28px] flex items-start justify-between">
                <div>
                    <p className="text-white font-[700] text-[18px] mb-[6px] leading-[25.2px]">Projects</p>
                    <div className="flex gap-[4.5px]">
                        <img src={Circle} alt="circle icon" />
                        <p className="text-[#8998AE] font-[400] text-[14px] leading-[19.6px]">30 done this month</p>
                    </div>
                </div>
                <img src={More} alt="more icon" />
            </div>
            <div>
                <table>
                    <thead>
                        <tr className="pb-[12.5px]">
                            <th className="text-[#8998AE] font-[400] text-[14px] leading-[19.6px] pb-[12.5px] text-start">COMPANIES</th>
                            <th className="text-[#8998AE] font-[400] text-[14px] leading-[19.6px] pb-[12.5px] text-start">MEMBERS</th>
                            <th className="text-[#8998AE] font-[400] text-[14px] leading-[19.6px] pb-[12.5px] text-start">BUDGET</th>
                            <th className="text-[#8998AE] font-[400] text-[14px] leading-[19.6px] pb-[12.5px] text-start">COMPLETION</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            PROJEKTS_LISTS2?.map(item => (
                                <tr key={item.id}>
                                    <td className="pt-[40px] flex items-end">
                                        <img src={item.img} alt="company logo" className="w-[20px] h-[20px] mr-[10px]" />
                                        <p className='text-white font-[400] text-[14px] leading-[21px]'>{item.title}</p>

                                    </td>
                                    <td className="py-[19px]">
                                        <img src={item.members} alt="" />
                                    </td>
                                    <td className="py-[19px] text-white font-[700] text-[14px] leading-[21px]">{item.budget}</td>
                                    <td className="py-[19px]">
                                        <div>
                                            <p className="py-[19px] text-white font-[700] text-[14px] leading-[21px]">
                                                {item.completion}
                                            </p>

                                            <div className="w-[200px] bg-[#1E293B] rounded-full h-2.5">
                                                <div
                                                    className="bg-blue-500 h-2.5 rounded-full"
                                                    style={{ width: `${item.completion}` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Projects;
