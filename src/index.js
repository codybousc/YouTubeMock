import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCjXuQOPTrrQsCRG9_13GPaBjXqpvWcm5Y';

YTSearch({ key: API_KEY, term: 'surfer girls'}, function(data) {
  console.log(data);
});

//Create a new component which should produce some html
//const App is a class and not an instance. there can be many instances of App
class App extends Component {
  render () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}




//Take this component's generated HTML and place in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
