import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBG1-20N_dNqUKj6W2YqcesUsROiPYthhE'; // need to put in key

// sample search
YTSearch({key: API_KEY, term: 'pet grooming'}, function(data) {
    console.log(data);
});

// create a new component. this component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// take the component and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));