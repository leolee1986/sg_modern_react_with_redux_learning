import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBG1-20N_dNqUKj6W2YqcesUsROiPYthhE'; // need to put in key

// class based component
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        // defalut youtube search when the app is fire up
        // pass a setup object and a callback function
        YTSearch({key: API_KEY, term: 'pet grooming'}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); 
        });

    };
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList
                 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                 videos = {this.state.videos} />
            </div>
        );
    }
}

// take the component and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));