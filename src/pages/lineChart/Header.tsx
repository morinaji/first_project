import React from 'react'
import {AiOutlineExclamation} from 'react-icons/ai'

export default function Header() {
  return (
    <div className='flex justify-between'>

        <div className='flex flex-col items-start'>
            <span className="text-white">وضعیت سرویس هوش مصنوعی</span>
            <div className='flex items-center'>
                <span className='green-feel'>تحلیل رفتاری</span>
                <div className='analyze-header flex justify-center items-center rounded-full mr-1'>
                    <AiOutlineExclamation/>
                </div>
            </div>
        </div>
    
        <div>

        </div>
    </div>
  )
}
