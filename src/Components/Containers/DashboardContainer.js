import React, {Component} from 'react'
import SomeChart from '../ChildComponents/SomeChart.js'

class DashboardContainer extends Component{

  render(){
    return(
      <div>
        Dashboard
        <SomeChart/>
      </div>
    )
  }
}


export default DashboardContainer
