import React, { useState, useEffect } from 'react'
import _, { Dictionary } from "lodash";
import './react-grid-layout.css'

import { Responsive, WidthProvider } from "react-grid-layout";
import Chart from '../lineChart/Chart';
import Container from '../lineChart/Container';
import Testi from './Testi';
const ResponsiveReactGridLayout = WidthProvider(Responsive);


interface state_int {
    currentBreakpoint: "lg" | "md" | "sm" | "xs" | "xxs",
    compactType: 'vertical' | 'horizontal' | null | undefined,
    mounted: boolean,
    layouts: any,
    className: string,
    rowHeight: number,
    onLayoutChange: any,
    cols: any
}

interface widgetInt {
    index : number,
    date:number,
    name: string,
    new: boolean,
    x: number,
    y: number,
    w: number,
    h: number,

}


function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here 
  // is better than directly setting `setValue(value + 1)`
}

let widgets_global: widgetInt[];
let widget_list_global :string[];

export default function Container3() {
    let width = 4
    let height = 15
    const [addclass, setAddClass] = useState<boolean>(false)
    const [flag, setFlag] = useState<boolean>(true)

    const [widgets, setWidgets] = useState<widgetInt[]>([
      {
        index : 0,
        date:86400,
        name: "widget1",
        new: false,
        x: 0,
        y: 0,
        w: 2,
        h: 3,

      }
    ])
    const [widgetsList, setWidgetsList] = useState<string[]>([
      "widget2",
      "widget3",
      "widget4",
      "widget5",
      "widget6",
      "widget7",
      "widget8"
    ])
    widgets_global = widgets;
    widget_list_global = widgetsList;


  
  
    const generateLayout= () => {
      return _.map(_.range(0, widgets.length), function(item, i) {
        // var y = Math.ceil(Math.random() * 4) + 1;
        return {
          // x: Math.round(Math.random() * 5) * 2,
          // y: Math.floor(i / 6) * y,
          // w: 2,
          // h: 3,
          index : widgets[i].index,
          date:0,
          x: (i*4)%12,
          y: widgets[i]?.y,
          w: width,
          h: height,
          i: i.toString(),
          name: widgets[i]?.name,

          // static: Math.random() < 0.05
        };
      });
    }

    useEffect(() => {
      const delay = 50; // Delay of 1000 milliseconds (1 second)
      const timer = setTimeout(() => {
      }, delay);
      setState(prevState => ({
        ...prevState,
        layouts: { lg: generateLayout() }
      }));
    }, [flag]);

    const [modalToggle , setModalToggle] = useState(false)
    const defaultProps = {
        className: "layout",
        rowHeight: 10,
        onLayoutChange: function() {},
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      };
    
    const [state,setState] =  useState<state_int>({
        currentBreakpoint: "lg",
        compactType: "vertical" ,
        mounted: true,
        layouts: { lg: generateLayout() },
        className: "layout",
        rowHeight: 30,
        onLayoutChange: function(){},
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      })
    
    const generateDOM = () => {
        return _.map(state.layouts.lg, function(l, i) {
            return (
              // <div key={i} className={l.static ? "static testdiv" : "testdiv"}>
              //   {l.static ? (
              //     <span
              //       className="text"
              //       title="This item is static and cannot be removed or resized."
              //     >
              //       Static - {i}
              //     </span>
              //   ) : (
              //     <div className="text didtest">{l.name}</div>
              //   )}
              // </div>



              <div key={i} data-grid={{x: l.x, y: l.y, w: l.w, h: l.h}} >
                    {l.name}
                    <Chart/>

                  
              </div>
            );
          });      
      };

      const onBreakpointChange = (breakpoint:"lg" | "md" | "sm" | "xs" | "xxs") => {
        setState({...state , currentBreakpoint: breakpoint});
      };

      const onCompactTypeChange = () => {
        const { compactType: oldCompactType } = state;
        const compactType =
          oldCompactType === "horizontal"
            ? "vertical"
            : oldCompactType === "vertical"
            ? null
            : "horizontal";
        setState({...state , compactType: compactType });
      };

      const onLayoutChange = (layout:any, layouts:any) => {
        state.onLayoutChange(layout, layouts);
      };
    
      const onNewLayout = () => {
        setState({ ...state,
          layouts: { lg: generateLayout() }
        });
      };
    
      const onDrop = (layout : any, layoutItem : any, _event: any) => {

        // alert(`Dropped element props:\n${JSON.stringify(layoutItem, ['x', 'y', 'w', 'h'], 2)}`);
        let newWidget = widgets.filter((item) => item.new === true)
        let oldWidgets = widgets.filter((item) => item.new !== true)
        let tempWidget = {
          // index : Math.floor((((layoutItem.x * layoutItem.y)) + layoutItem.x)/width)*width,
          index : Math.floor((( Math.floor((layoutItem.y+1) / height) * 12) + layoutItem.x)/width)*width,
          date:newWidget[0]?.date,
          name : newWidget[0]?.name,
          new:true,
          x: layoutItem.x,
          y : layoutItem.y,
          w : layoutItem.w,
          h : layoutItem.h,
        }
        let newWidgets = [...oldWidgets , tempWidget]
        setWidgets(newWidgets)
        setFlag(!flag)
        setTimeout(() => {
          setAddClass(true);
        }, 500);
      };
    
  return (
    <div className=''>
      <div>
        <button className='buttonWidgets' onClick={() => {
          setModalToggle(!modalToggle);
          setAddClass(false);
        
        }}>open widgets list</button>
        {/* <div>
          Current Breakpoint: {state.currentBreakpoint} (
          {defaultProps.cols[state.currentBreakpoint]} columns)
        </div> */}
        {/* <div>
          Compaction type:{" "}
          {_.capitalize(state.compactType? state.compactType : "") || "No Compaction"}
        </div> */}
        {/* <button onClick={onNewLayout}>Generate New Layout</button>
        <button onClick={onCompactTypeChange}>
          Change Compaction Type
        </button> */}
        <div className={[modalToggle ? 'modal' : 'modal modal_invisible',addclass? "dispaly_none" : "" ].join(" ")}>
           { widgetsList.map( item => ( 
                <div

                className="droppable-element"
                draggable={true}
                unselectable="on"
                // this is a hack for firefox
                // Firefox requires some kind of initialization
                // which we can do by adding this attribute
                // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
                onDragStart={e => {
                    // setModalToggle(!modalToggle)
                    e.dataTransfer.setData("text/plain", "")
                    }
                    
                }
                onDragEnd={e => {



                  
                  let newWidget = widgets.filter((item) => item.new === true)
                  // let repeated = widgets.filter((item) => item.index === (newWidget[0].x * newWidget[0].y) + newWidget[0].x )
                  let oldWidgets = widgets.filter((item) => item.new !== true)
                  let today = new Date()
                  let tempWidget = {
                    // index : Math.floor((( newWidget[0].y * newWidget[0].x) + newWidget[0].x)/width)*width,
                    index : Math.floor((( Math.floor((newWidget[0].y+1) / height) * 12) + newWidget[0].x)/width)*width,
                    date: 86400 -( today.getHours() * 3600 + today.getMinutes()*60 + today.getSeconds() ),
                    name : item,
                    new:false,
                    x: newWidget[0].x,
                    y : newWidget[0].y,
                    w : newWidget[0].w,
                    h : newWidget[0].h,

                  }
                  let newWidgets = [...oldWidgets , tempWidget]
                  let new_widgets_end = newWidgets.sort((a, b) => a.date - b.date);
                  let new_widgets = new_widgets_end.sort((a, b) => a.index - b.index);
                  let new_widgets_new = new_widgets.map((element, i) => {
                    return(
                      {
                        index : (i)*width,
                        date: 86400 -( today.getHours() * 3600 + today.getMinutes()*60 + today.getSeconds() ),
                        name : element.name,
                        new:element.new,
                        x: element.x,
                        y : element.y,
                        w : element.w,
                        h : element.h,
                        // index : Math.floor((( element.y * ((i)%(12/width))*width ) + ((i)%(12/width))*width)/width)*width,
                      }
                    )
                  })
    
                  // let new_widgets_last = newWidgets.map((element, i) => {
                  //   return (
                  //     {
                  //       name : element.name,
                  //       new: element.new,
                  //       x: element.x,
                  //       y : element.y,
                  //       w : element.w,
                  //       h : element.h,
                  //       index : (newWidget[0].x * newWidget[0].y) + newWidget[0].x
                  //       // index : Math.floor(newWidget.length/(12/newWidget[i].w))* element.h
                  //     }
                  //   )
                  // })

                  setWidgets(new_widgets_new)
                  setFlag(!flag)
                  setModalToggle(!modalToggle)

                  // const temp = widgetsList.filter((listitem) => listitem !== item);
                  // setWidgetsList([...temp]);
                  // setWidgets([...widgets, item]);
                  // let newWidget = {
                  //   name: item,
                  //   new: true,
                  //   x: 0 ,
                  //   y : 0,
                  //   w : 0,
                  //   h : 0
                  // }
                  
                  setWidgetsList(prevList => prevList.filter(listitem => listitem !== item));
                  // setWidgets(prevWidgets => [...prevWidgets, newWidget]);

                  widget_list_global = widgetsList;
                  widgets_global = widgets;
                  setState(prevState => ({ ...prevState }));
               
                     }
                  
                }
                >
                {item}
                </div>

              )

            )}
           
          
        </div>
        
        <ResponsiveReactGridLayout
          {...defaultProps}
          layouts={state.layouts}
          onBreakpointChange={onBreakpointChange}
          onLayoutChange={onLayoutChange}
          onDrop={onDrop}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={state.mounted}
          compactType={state.compactType}
          preventCollision={!state.compactType}
          isDroppable={true}
          cols={state.cols}
        >
          {generateDOM()}
          {/* {
            state.layouts.lg.map((l:any, i:number) => (
                <div key={i} className={l.static ? "static testdiv" : "testdiv"}>
                  {l.static ? (
                    <span
                      className="text"
                      title="This item is static and cannot be removed or resized."
                    >
                      Static - {i}
                    </span>
                  ) : (
                    <span className="text didtest">{l.name}</span>
                  )}
                </div>
              
            )
            )      

          } */}
        </ResponsiveReactGridLayout>
      </div>
    </div>
  )
}


