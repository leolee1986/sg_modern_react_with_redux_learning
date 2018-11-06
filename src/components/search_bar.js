import React, {Component} from 'react'; // {Component} that way when we extends the class below we can use Component instead of React.Component

// { Component }  === const Component = React.Component

// functional component
// const SearchBar = () => {
//     return <input />;
// };

// class based component can keep track of some sort of records, state
class SearchBar extends Component {
    // when an instant is created, constructor automatically called
    // constructor function is researse for doing some setup, init var, init state, etc
    constructor(props) {
        // super mean Component here, super call the parent method
        super(props);

        // when initialize state, we set an object, term is the property
        // we only set the state = {} in the constructor, every where else we use setState to update state, never use state = {}
        this.state = {term:''};
    }

    render() {
        // the event handler(a function) passed back into onChange, onChange is prop
        return (
            <div className="search-bar">
                <input
                value = {this.state.term} 
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;