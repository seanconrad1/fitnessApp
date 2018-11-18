import React, {Component} from 'react'

class Exercise extends Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props)
    return(
      <div>
        {this.props.exercise.name}
      </div>
    )
  }


}

export default Exercise
