import React, {Component} from 'react'
import Calendar from 'react-calendar';

class NewExerciseForm extends Component{
  constructor(props){
  super(props)
  this.state={
    date: new Date(),
    weight: ''
  }
}

changeEverything = (e) =>{
  this.setState({[e.target.name]: e.target.value})
}

onChange = date => this.setState({ date })

onSkip = (e) =>{
  e.preventDefault();
  console.log('skipped')
}

onSubmit = (e) =>{
  e.preventDefault()
  fetch('http://0.0.0.0:3000/api/v1/users').then(r=>r.json()).then(data=>console.log(data))
}


  render(){
    return(
      <div>
        New Exercise
        <form>
          Weight: <input onChange={this.changeEverything} name='weight' type='text'/>
          <br/>
          Date:
          <Calendar onChange={this.onChange} value={this.state.date}/>
          <br/>
          <input onClick={this.onSkip} value='Skip' type='submit'/>
          <input onClick={this.onSubmit} type='submit'/>
        </form>
      </div>
    )
  }
}


export default NewExerciseForm
