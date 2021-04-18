import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component
{
  constructor(props){//component가 web으로 갈 때 호출되는 method
    super(props);
    console.log("Hello");
  }//render보다 먼저 실행
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

  componentDidMount()
  {
   console.log("component rendered"); 
  }

  componentDidUpdate()//state가 바뀌는 것과 같이 어떤 것이 업데이트 되면 발생
  {
    console.log("i just updated");
  }

  componentWillUnmount()//component가 떠날 때 동작
  {
    console.log("Goodbye, cruel world");
  }
  render()
  {
    console.log("render");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.minus}>Minus</button>
      </div>
    );
  }
}//1. constructor  2. render  3. componentDidMount의 순서로 실행
export default App;
