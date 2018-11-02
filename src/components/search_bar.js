import React, {Component} from 'react'; // {Component} that way when we extends the class below we can use Component instead of React.Component

// { Component }  === const Component = React.Component

// functional component
// const SearchBar = () => {
//     return <input />;
// };

// class based component can keep track of some sort of records, state
class SearchBar extends Component {
    render() {
        // the event handler passed back into onChange, onChange is prop
        return <input onChange={this.onInputChange} />;
    }

    // Event Handler , pass in event object, we can refactor to put the eventHandler function directly into the onChange
    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;