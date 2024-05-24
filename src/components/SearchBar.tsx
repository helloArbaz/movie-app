import React, { Component } from 'react';
import PropTypes from 'prop-types';


interface SearchBarProps { }
interface SearchBarState { }

class SearchBar extends Component<SearchBarProps, SearchBarState> {

    constructor(props: SearchBarProps) {
        super(props)
        this.state = {}
    }

    componentDidMount(): void { }

    componentWillUnmount(): void { }

    render() {
        return (
            <div>

            </div>
        );
    }
}


export default SearchBar;