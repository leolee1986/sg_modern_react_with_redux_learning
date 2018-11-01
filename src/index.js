import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = ''; // need to put in key

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