import React, { useState } from 'react'
import _, { Dictionary } from "lodash";

import { Responsive, WidthProvider } from "react-grid-layout";
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

export default function Container3() {
    const [modalToggle , setModalToggle] = useState(true)
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
              <div key={i} className={l.static ? "static testdiv" : "testdiv"}>
                {l.static ? (
                  <span
                    className="text"
                    title="This item is static and cannot be removed or resized."
                  >
                    Static - {i}
                  </span>
                ) : (
                  <span className="text">{i}</span>
                )}
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
        alert(`Dropped element props:\n${JSON.stringify(layoutItem, ['x', 'y', 'w', 'h'], 2)}`);
      };
    
  return (
    <div className=''>
      <div>
        <button onClick={() => setModalToggle(!modalToggle)}>click me</button>
        <div>
          Current Breakpoint: {state.currentBreakpoint} (
          {defaultProps.cols[state.currentBreakpoint]} columns)
        </div>
        <div>
          Compaction type:{" "}
          {_.capitalize(state.compactType? state.compactType : "") || "No Compaction"}
        </div>
        <button onClick={onNewLayout}>Generate New Layout</button>
        <button onClick={onCompactTypeChange}>
          Change Compaction Type
        </button>
        <div className={modalToggle ? 'modal' : 'modal_invisible'}>
            <div

            className="droppable-element"
            draggable={true}
            unselectable="on"
            // this is a hack for firefox
            // Firefox requires some kind of initialization
            // which we can do by adding this attribute
            // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
            onDragStart={e => {
                setModalToggle(modalToggle)
                e.dataTransfer.setData("text/plain", "")
                }
            }
            >
            Droppable Element (Drag me!)
            </div>
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
        </ResponsiveReactGridLayout>
      </div>
    </div>
  )
}


function generateLayout() {
    return _.map(_.range(0, 25), function(item, i) {
      var y = Math.ceil(Math.random() * 4) + 1;
      return {
        x: Math.round(Math.random() * 5) * 2,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: 3,
        i: i.toString(),
        static: Math.random() < 0.05
      };
    });
  }
