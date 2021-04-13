import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
/*app .js에 있는 App() function을 반환
react는 한번에 하나의 component만을 반환(render),
따라서 모든 것은 application안에 들어가야만한다.
많은 component들을 하나의 app에 넣어야한다.
*/