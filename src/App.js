import React, { Component } from 'react';
import NewExerciseForm from './Components/ChildComponents/NewExerciseForm.js'
import DailyQuestions from './Components/ChildComponents/DailyQuestions.js'
import DashboardContainer from './Components/Containers/DashboardContainer.js'
import ExerciseContainer from './Components/Containers/ExerciseContainer.js'
import SomeChart from './Components/ChildComponents/SomeChart.js'

class App extends Component {
  render() {
    return(
      <center>
        <div>
          <SomeChart/>
        </div>
      </center>
    )
  }
}

export default App;
