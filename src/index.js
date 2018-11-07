import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

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

        this.videoSearch('pet grooming');
    };

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); 
        });
    }

    render() {
        // use lodash to slow down the term, only kick on every 300 ms or so allow user to type
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
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