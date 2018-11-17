import React, {Component} from 'react'

class NewExerciseContainer extends Component{
  constructor(props){
  super(props)
  this.state={
    name: '',
    weight: '',
    equipment: '',
    reps: '',
    sets: '',
    muscle_group: ''
  }
}

changeEverything = (e) =>{
  this.setState({[e.target.name]: e.target.value})
}


  render(){
    console.log(this.state)
    return(
      <div>
        New Exercise
        <form>
          Exercise name: <input onChange={this.changeEverything} name='name' type='text'/>
          <br/>
          Weight:  <input onChange={this.changeEverything} name='weight' type='text'/>
          <br/>
          Equipment: <input onChange={this.changeEverything} name='equipment' type='text'/>
          <br/>
          Reps: <input onChange={this.changeEverything} name='reps' type='text'/>
          <br/>
          Sets: <input onChange={this.changeEverything} name='sets' type='text'/>
          <br/>
          Muscle Group: <input onChange={this.changeEverything} name='muscle_group' type='text'/>
          <br/>
          <input onSubmit={this.onSubmit} type='submit'/>
        </form>
      </div>
    )
  }
}


export default NewExerciseContainer
