import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component which should produce some html
//const App is a class and not an instance. there can be many instances of App
const App = () => {
  return <div>Helllo there</div>;
}




//Take this component's generated HTML and place in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
