import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component
{ 
  state = {
    isLoading : true,
    movies : []
  };
  
  componentDidMount()
  {
    setTimeout(() => 
    {
      this.setState({isLoading : false});
    }, 6000);//파라미터로 선언되지 않은 변수를 입력 받을 수 있다. 미래에 사용하는 것을 먼저 쓰는 습관은 좋은 것이다.
  }/*componentDidMount는 render후 바로 실행이되는 method이므로 
     쉽게 render후에 state를 조절할 수 있다.*/
  render()
  {
    const {isLoading} = this.state;
      return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}
export default App;
