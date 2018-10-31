import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. this component should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

// take the component and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));