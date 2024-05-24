import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./AppLayout.css"
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { deviceWidth } from '../helper/getDeviceType';
import { colorPaletts } from '../configs/colorPaletts';

interface AppProps { }
interface AppState { }


class AppLayout extends Component<AppProps, AppState> {
    render() {
        return (
            <div>
                <Header />
                <div style={{ marginTop: '70px', width: "100%" }}>
                    <div style={{ justifyContent: 'center', alignContent: 'center', display: "flex" }}>
                        <div style={{ width: deviceWidth.lg, backgroundColor:colorPaletts.palette.primary.light ,padding:10,}}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppLayout;