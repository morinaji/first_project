import React, { useState } from 'react';
import analysisItem from '../models/analysisItem';
import analysisList from '../models/analysisList';


function Analysis(props : analysisList) {

    return (
        <div className='Analysis_container background-ul my-1 rounded-xl'>
            <ul className='items-scroll flex flex-col w-full max-h-[120px] overflow-x-auto'>
                {props.items.map ( item => <li className='flex flex-row w-full mb-1'>
                    <span className={['basis-1/5' , props.good? "green-feel" : "red-feel"].join(" ")}>{item.title}</span>
                    <span className='basis-2/5 color-white text-left'>{item.percent}</span>
                    <span className='basis-2/5 color-amount'>{item.amount}</span>
                </li>)}
            </ul>
        </div>

    );
}

export default Analysis;