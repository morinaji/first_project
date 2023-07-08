import React from 'react';
import ReactEcharts from "echarts-for-react";

function Chart() {
  let first = 70
  let second = 100 - first
  let max = 300
  let threshold = 50
  const option = {
    backgroundColor: "#0E1227",
    visualMap: {
      top: 50,
      right: 10,
      seriesIndex : 0,
      
      pieces: [
        {
          gt: 0,
          lte: threshold,
          color: '#93CE07'
        },
        {
          gt: max * (first/100),
          color: '#AC3B2A'
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
          width : [1]
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
        data: [150, 230, 20, 218, 35, 147, 260],
        type: 'line'
      },
      
      {
        name: 'Bing',
        markLine: {
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
        data: [0,0,0,0,0,0,0,300*(first/100)]
      },
      {
        name: 'sing',
        type: 'bar',
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
        <div className='basis-3/4'>
            <ReactEcharts option={option}/>
        </div>
    );
}

export default Chart;