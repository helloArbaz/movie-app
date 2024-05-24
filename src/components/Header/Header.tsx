import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./Header.css"

interface HeaderProps { }
interface HeaderState { }
class Header extends Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props)
        this.state = {}
    }

    componentDidMount(): void { }

    componentWillUnmount(): void { }

    render() {
        return (
            <div id='header'>
                <div className='headerContainer'>
                    Header
                </div>
            </div>
        );
    }
}


export default Header;