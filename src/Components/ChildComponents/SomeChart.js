import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineMarkSeries} from 'react-vis';


const someChart = () => {
  return(
    <XYPlot
      width={window.innerWidth - 600}
      height={window.innerHeight - 600}>
      <XAxis/>
      <YAxis/>
      <HorizontalGridLines />
      <LineMarkSeries data={[
          {x: 1, y: 144},
          {x: 2, y: 147},
          {x: 3, y: 148},
          {x: 4, y: 149},
          {x: 5, y: 150},
          {x: 6, y: 151},
          {x: 7, y: 152},
          {x: 8, y: 153}
        ]}/>
    </XYPlot>
  )
}

export default someChart
