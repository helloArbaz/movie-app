import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDeviceType } from '../helper/getDeviceType';




// class WithDeviceInfo extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// export default WithDeviceInfo;

const WithDeviceInfo = (WrappedComponent: any) => {
    return class extends Component {
        state = { deviceType: 'sm' }

        handleResize = () => {
            this.setState({ deviceType: getDeviceType() });
        };

        componentDidMount() {
            this.handleResize();
            window.addEventListener('resize', this.handleResize);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize);
        }

        render() {
            return <WrappedComponent {...this.props} deviceType={this.state.deviceType} />;
        }
    }
}

export default WithDeviceInfo;