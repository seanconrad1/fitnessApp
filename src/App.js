import React, { Component } from 'react';
import NewExerciseForm from './Components/ChildComponents/NewExerciseForm.js'
import DailyQuestions from './Components/ChildComponents/DailyQuestions.js'
import DashboardContainer from './Components/Containers/DashboardContainer.js'

class App extends Component {
  render() {
    return(
      <center>
        <div>
          <DashboardContainer/>
        </div>
      </center>
    )
  }
}

export default App;
