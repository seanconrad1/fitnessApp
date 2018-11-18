import React, {Component} from 'react'
import Exercise from '../ChildComponents/Exercise.js'

class ExerciseContainer extends Component{
  state = {
    exercises: []
  }

  componentDidMount(){
    console.log('gothere')
    fetch('http://0.0.0.0:3000/api/v1/exercises')
    .then(r=>r.json())
    .then(data=>this.setState({
      exercises: data
    }))
  }


  render(){
    return(
      <div>
        Available Exercises:
        <br/>
        <br/>
        {this.state.exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} /> )}
      </div>
    )
  }
  
}


export default ExerciseContainer
