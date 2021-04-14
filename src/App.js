import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component
{
  state = {
    count : 0
  }//it can be change
  add = () => {
    this.setState(current => ({count : current.count + 1}));
  };
  minus = () => {
    this.setState({count : this.state.count - 1});
  };
  //state를 직접적으로 바꾸면 오류
  render()
  {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
