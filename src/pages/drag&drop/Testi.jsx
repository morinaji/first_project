import React from 'react';
import ReactEcharts from 'echarts-for-react'

const Testi = () => {
    let first = 96
    let second = 100 - first
    let max = 300
    let threshold = 50
    let one_last = 240
    let data_mine = [];
    if (max * (first / 100) > 300) {
    data_mine.push({ type: 'max', name: 'Max' });
    }
    data_mine.push({ type: 'min', name: 'Min' });

    let option = {
        visualMap: {
            show:false,
            seriesIndex : 0,
            emphasis: {
            } ,
            selectedMode  : false,
            pieces: [
              {
                gt: 0,
                lte: threshold,
                color: '#93CE07'
              },
              {
                gt: max * (first/100),
                color: '#AC3B2A'
              },
              first > 90 &&
              {
                gt: max * (first/100) ,
                color: "transparent"
              } 
            ],
            outOfRange: {
              color: '#999'
            }
          },
          graph : {
            color : "#4992ff"
          },
          grid: {
            show:false
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', "hi"],
            axisTick : {
              show : false
            },
            axisLine : {
              show : false
            },
            splitLine: {
              show : true,
              lineStyle : {
                color: ["#262D57"],
                width : 1
              }
           },
      
      
          },
          yAxis: {
            type: 'value',
            show: false,
            splitNumber : 6,
            splitLine: {
              show: true,
              lineStyle : {
                color: ["#0E1227","#FB1A43","#0E1227","#0E1227","#0E1227","#0E1227","#0E1227"],
                width : 2,
                type: [5, 10],
                dashOffset: 1
              }
           },
          },
          series: [
            {
              data: [150, 230, 20, 288, 35, 147, one_last, 2*max*(first/100)-one_last],
              type: 'line',
              symbol :"none",
              markPoint: {
                data:data_mine
              },
            },
            
            {
              name: 'Bing',
              markLine: {
      
                symbol: 'none',
                data: [{name: 'hi', yAxis: threshold,
                lineStyle : {
                  color: "#FB1A43",
                  width : 2,
                  type: [5, 10],
                  dashOffset: 1
                  }  
                },
                {name: 'hi2', yAxis: 300*(first/100),
                lineStyle : {
                  color: "#626999",
                  width : 2,
                  type: "solid"
                  }  
                }
              ],   
      
              },
              color:"#0F67EB",
              type: 'bar',
              barWidth : "100%" ,
              stack: 'al',
              label : {show: false,
                formatter: 'تحیل شده \n{@score}',
                fontSize : 13
              
              },
              emphasis: {
                focus: 'series'
              },
              itemStyle: {
                emphasis: {
                    barBorderRadius: [50, 50]
                },
      
                normal: {
                    barBorderRadius: [0, 0, 12 ,12 ]
                }
            },
            z: 10,
              data: [0,0,0,0,0,0,0,300*(first/100)]
            },
            {
              name: 'sing',
              type: 'bar',
              z: 10,
              stack: 'al',
              color:"#FB1A43",
              label : {show: false,
                position: "inside",
                formatter: 'تحیل نشده \n{@score}'
              
              },
              labelLine: {
                show: false
              },
              emphasis: {
                focus: 'series'
              },
              itemStyle: {
                emphasis: {
                    barBorderRadius: [50, 50]
                },
                normal: {
                    barBorderRadius: [12, 12, 0 ,0 ]
                }
            },
              data: [0,0,0,0,0,0,0,300*(second/100)]
            },
            
          ]
        };
    
    return (
        <div>
            <ReactEcharts option={option}/>
        </div>
    );
};

export default Testi;