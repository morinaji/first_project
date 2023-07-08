import React, { useState } from 'react';
import analysisItem from '../../models/analysisItem';
import analysisList from '../../models/analysisList';


function Analysis(props : analysisList) {

    return (
        <ul className='flex flex-col w-full background-ul p-3 rounded-xl my-1'>
            {props.items.map ( item => <li className='flex flex-row w-1/1 bg-red-700 my-1'>
                <span className={['basis-1/5' , props.good? "green-feel" : "red-feel"].join(" ")}>{item.title}</span>
                <span className='basis-3/5 color-white'>{item.percent}</span>
                <span className='basis-1/5'>{item.amount}</span>
            </li>)}
        </ul>
    );
}

export default Analysis;