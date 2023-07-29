import React from 'react';
import {RiCloudLine, RiSearchLine} from 'react-icons/ri'
import {LiaMeteorSolid} from 'react-icons/lia'
import {TbPictureInPictureOff} from 'react-icons/tb'

interface propsInt {
    type : string,


}

function ModalWidget(props:propsInt) {

    return (
        <div className='bg-[#F8F8F8] rounded-[20px] flex p-5 items-center justify-between'>
            {
            props.type === "search" ?

            <div className='bg-[#FFFFFF] w-[100px] h-[100px] rounded-lg flex items-center justify-center'>
                <div className='w-[32%] h-[32%] bg-[#F3565F] flex items-center justify-center text-white text-[20px] rounded-[30%] z-10'>
                    <RiSearchLine/>
                </div>
                <div className='w-[28%] h-[28%] flex flex-col items-center justify-between  ml-[-5px] z-3'>
                    <div className='bg-[#D9DEE4] w-[100%] h-[20%] rounded-lg'></div>
                    <div className='bg-[#AFAFAF] w-[100%] h-[20%] rounded-lg '></div>
                    <div className='bg-[#D9DEE4] w-[100%] h-[20%] rounded-lg'></div>
                    <div className='bg-[#AFAFAF] w-[100%] h-[20%] rounded-lg'></div>
                </div>
            </div>
            :
            props.type === "speed" ?

            <div className='bg-[#FFFFFF] w-[100px] h-[100px] rounded-lg flex flex-col items-center justify-center'>
                <div className='test_Cir flex justify-center relative mt-[20px]'>
                    <div className='mt-[7px] text-[14px] mb-[4px]'>
                    <LiaMeteorSolid/>
                    <div className='h-[10px] w-[150%] absolute left-[-25%] flex justify-between items-center mt-[1px]'>
                        <div className='w-[59%] h-[7px] bg-[#D9DEE4] rounded-lg'></div>
                        <div className='w-[30%] h-[6px] bg-[#AFAFAF] rounded-lg'></div>
                    </div>
                    </div>
                 
                </div>
                <div>

                </div>
                

            </div>
            :
            props.type === "publication" ?


            <div className='bg-[#FFFFFF] w-[100px] h-[100px] rounded-lg flex flex-col items-center justify-center'>
                <div className='relative w-[55%] h-[55%] flex items-end justify-between' >
                    <div className='relative w-[16%] h-[100%] flex items-center justify-center'>
                        <div className='absolute bottom-0   w-[100%] h-[100%] bg-[#D9DEE4] flex items-center justify-center text-white text-[20px] rounded-[14%] z-5'>
                        </div>
                        <div className='absolute bottom-0  w-[100%] h-[80%] bg-[#AFAFAF] flex items-center justify-center text-white text-[20px] rounded-[14%] z-7'>
                        </div>
                        <div className='absolute bottom-0   w-[100%] h-[40%] bg-[#F3565F] flex items-center justify-center text-white text-[20px] rounded-[14%] z-10'>
                        </div>
                    </div>
                    <div className='relative w-[16%] h-[50%] flex items-center justify-center'>
                        <div className='absolute bottom-0   w-[100%] h-[100%] bg-[#D9DEE4] flex items-center justify-center text-white text-[20px] rounded-[14%] z-5'>
                        </div>
                        <div className='absolute bottom-0  w-[100%] h-[80%] bg-[#AFAFAF] flex items-center justify-center text-white text-[20px] rounded-[14%] z-7'>
                        </div>
                        <div className='absolute bottom-0   w-[100%] h-[40%] bg-[#F3565F] flex items-center justify-center text-white text-[20px] rounded-[14%] z-10'>
                        </div>
                    </div>
                    <div className='relative w-[16%] h-[70%] flex items-center justify-center'>
                        <div className='absolute bottom-0   w-[100%] h-[100%] bg-[#D9DEE4] flex items-center justify-center text-white text-[20px] rounded-[14%] z-5'>
                        </div>
                        <div className='absolute bottom-0  w-[100%] h-[80%] bg-[#AFAFAF] flex items-center justify-center text-white text-[20px] rounded-[14%] z-7'>
                        </div>
                        <div className='absolute bottom-0   w-[100%] h-[40%] bg-[#F3565F] flex items-center justify-center text-white text-[20px] rounded-[14%] z-10'>
                        </div>
                    </div>
                    <div className='relative w-[16%] h-[60%] flex items-center justify-center'>
                        <div className='absolute bottom-0   w-[100%] h-[100%] bg-[#D9DEE4] flex items-center justify-center text-white text-[20px] rounded-[14%] z-5'>
                        </div>
                        <div className='absolute bottom-0  w-[100%] h-[80%] bg-[#AFAFAF] flex items-center justify-center text-white text-[20px] rounded-[14%] z-7'>
                        </div>
                        <div className='absolute bottom-0   w-[100%] h-[40%] bg-[#F3565F] flex items-center justify-center text-white text-[20px] rounded-[14%] z-10'>
                        </div>
                    </div>
                   
                </div> 
                
            </div> 
            :
            props.type === "list"?

            <div className='relative bg-[#FFFFFF] w-[100px] h-[100px] rounded-lg flex flex-col items-center justify-center text-[50px] text-[#F3565F]'>
                <div className='w-[50%] flex flex-col items-end justify-center'>
                    <div className='w-[60%] h-[7px] bg-[#F3565F] rounded-lg'></div>
                    <div className='w-[100%] h-[6px] bg-[#D9DEE4] rounded-lg mt-[3px]'></div>
                </div>
                <div className='w-[50%] flex flex-col items-end justify-center mt-[6px]'>
                    <div className='w-[60%] h-[7px] bg-[#F3565F] rounded-lg'></div>
                    <div className='w-[100%] h-[6px] bg-[#D9DEE4] rounded-lg mt-[3px]'></div>
                </div>
            </div>

            :
            props.type === "cloud" ?

            <div className='relative bg-[#FFFFFF] w-[100px] h-[100px] rounded-lg flex flex-col items-center justify-center text-[50px] text-[#F3565F]'> 
                <RiCloudLine/>
                <div className='w-[39%] h-[7px] bg-[#AFAFAF] rounded-lg'></div>
                <div className='w-[27%] h-[6px] bg-[#D9DEE4] rounded-lg mt-[3px]'></div>
            </div>

            :
            <div className='relative bg-[#FFFFFF] w-[100px] h-[100px] rounded-lg flex flex-col items-center justify-center text-[50px] text-[#F3565F]'>
                <div className='flex items-center justify-between w-[65%] h-[20px]'>
                    <div className='w-[59%] flex flex-col items-end justify-center'>
                        <div className='w-[60%] h-[7px] bg-[#AFAFAF] rounded-lg'></div>
                        <div className='w-[100%] h-[6px] bg-[#D9DEE4] rounded-lg mt-[3px]'></div>
                    </div>
                    <div className='bg-[#F3565F] rounded-[40%] w-[34%] h-[100%]'></div>
                </div>
                <div className='flex items-center justify-between w-[65%] h-[20px] mt-[4px]'>
                    <div className='w-[59%] flex flex-col items-end justify-center'>
                        <div className='w-[60%] h-[7px] bg-[#AFAFAF] rounded-lg'></div>
                        <div className='w-[100%] h-[6px] bg-[#D9DEE4] rounded-lg mt-[3px]'></div>
                    </div>
                    <div className='bg-[#F3565F] rounded-[40%] w-[34%] h-[100%]'></div>
                </div>

            </div>
            
            }
            

            <div className='flex flex-col h-[80px] justify-between items-end'>
                {
                    props.type === "search" ?
                    <span>
                        جستجو و پایش
                    </span>
                    :
                    props.type === "speed" ?
                    <span>
                        سرعت انتشار
                    </span>
                    :
                    props.type === "publication" ?
                    <span>
                        انتشار هر بستر
                    </span>
                    :
                    props.type === "list" ?
                    <span>
                        لیست کلمات
                    </span>
                    :
                    props.type === "cloud" ?
                    <span>
                        ابر کلمات
                    </span>
                    :
                    <span>
                        پیام ها و محتوا
                    </span>
                }

                <div className='bg-[#FFFFFF] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center text-[20px]'> 
                    <TbPictureInPictureOff/>
                </div>
            </div>

        </div>
    );
}

export default ModalWidget;