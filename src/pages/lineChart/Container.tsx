import React from 'react';
import Chart from './Chart';
import Analysis from './Analysis';
import {useState} from "react"
import analysisItem from '../../models/analysisItem';


function Container() {
    const [items, setItems] = useState<analysisItem[]>([
        {title :"hello" , percent:80 , amount:22030},
        {title :"hello" , percent:80 , amount:22030},
        {title :"hello" , percent:80 , amount:22030},
        {title :"hello" , percent:80 , amount:22030},
    ])

    return (
        <div className='flex flex-col'>
            <div>

            </div>
            <div className='flex background-chart '>
                <Chart/>
                <div className='flex flex-col w-full justify-between bg-#0E1227'>
                    <Analysis items = {items} good/>
                    <Analysis items = {items} good= {false}/>
                </div>
                
            </div>
            
            
        </div>
    );
}

export default Container;