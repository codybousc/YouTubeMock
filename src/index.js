import _ from 'lodash';
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

    this.state = {
       videos: [],
       selectedVideo: null
     };

     this.videoSearch('skateboard tricks')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }
  render () {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 400)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}




//Take this component's generated HTML and place in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
