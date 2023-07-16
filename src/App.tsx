import React from 'react';
import './App.css';
import Container from './pages/lineChart/Container';
import Container3 from './pages/drag&drop/Container3';

function App() {
  
  const props_me = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: (layout: any, layouts: any) => {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
  containerPadding: [0, 0]
}
  return (
    <div className="App">
      
      {/* this is the chart 
      <div className='container_test'>
        <Container/>
      </div> */}
      <div className='container_test'>
        <Container/>
      </div>

      {/*  this is the react grid layout
      <Container3/> */}
      

    </div>
  );
}

export default App;
