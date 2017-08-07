// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render(){
    return(
    <div>
      <h1>{this.props.name}</h1>
      <ul>
        <li>Speed: {this.props.speed}</li>
        <li>Rockets?: {this.props.hasRockets}</li>
        <li>Colors: {this.props.colors.join(', ')}</li>
      </ul>
    </div>
  )
  }
}

Spaceship.defaultProps = {
  speed: `slow`,
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
