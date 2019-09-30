import React from 'react';

class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      //setState is a method of the superclass React.Component
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    )
  }
}

export default Square;