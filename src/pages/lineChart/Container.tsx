import React from 'react';
import Chart from './Chart';
import Analysis from '../../Components/Analysis';
import {useState} from "react"
import analysisItem from '../../models/analysisItem';
import Header from './Header';
import { Grid } from '@mui/material';


function Container() {
    const [items, setItems] = useState<analysisItem[]>([
        {title :"hello" , percent:80 , amount:22030},
        {title :"hello" , percent:80 , amount:22030},
        {title :"hello" , percent:80 , amount:22030},
        {title :"hello" , percent:80 , amount:22030},
        {title :"hello" , percent:80 , amount:22030},
        {title :"hello" , percent:80 , amount:22030},
        {title :"hello" , percent:80 , amount:22030},
        {title :"hello" , percent:80 , amount:22030},
    ])

    return (
        <div className='flex flex-col background-chart  rounded-xl py-4 px-7'>
            <div className='Container-header'>
                <Header/>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={3}>     
                    <div className='flex flex-col justify-between '>
                        <Analysis items = {items} good/>
                        <Analysis items = {items} good= {false}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <Chart/>
                </Grid>

            </Grid>

            <div className='flex  items-center py-2'>

                
            </div>
            
            
        </div>
    );
}

export default Container;