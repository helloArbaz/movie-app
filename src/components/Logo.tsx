import React, { Component } from 'react';
import PropTypes from 'prop-types';


interface LogoProps { }
interface LogoState { }

class Logo extends Component<LogoProps, LogoState> {

    constructor(props: LogoProps) {
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


export default Logo;