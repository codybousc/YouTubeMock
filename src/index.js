import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCjXuQOPTrrQsCRG9_13GPaBjXqpvWcm5Y';


//Create a new component which should produce some html
//const App is a class and not an instance. there can be many instances of App
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch({ key: API_KEY, term: 'surfer girls'}, (videos) => {
      this.setState({videos})
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}




//Take this component's generated HTML and place in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
