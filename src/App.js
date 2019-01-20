import React, { Component } from 'react';
import youtube from './apis/youtube'

import './App.css';
import SerachBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetial from './components/VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null }

 componentDidMount() {
   this.onTermSubmit('building')
 }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })

  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    return (
      <div className="ui container">
        <SerachBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetial video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
