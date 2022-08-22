import React from 'react';
import xappLogo from './assets/xG-logo.png'
import ricLogo from './assets/xAppControl.png'
import statsLogo from './assets/latency.png'
import './App.css';
import PropTypes from "prop-types";

const Home = (props, context) => {
    const goXapp = () => {
        window.location.href = "/xapp";
    };

    const goRic = () => {
        window.location.href = "/ric";
    };

    const goPlatform = () => {
        window.location.href = "/platform";
    };


    return (
        <div className="main-container">
            <div className="card-container" onClick={() => goXapp()}>
                <div className="header__container">
                    <span className="card__title">XAPP CATALOG</span>
                </div>
                <div className="body__container">
                    <img src={xappLogo} className="xapp-logo"/>
                </div>

            </div>
            <div className="card-container" onClick={() => goRic()}>
                <div className="header__container">
                    <span className="card__title">RIC CONTROL</span>
                </div>
                <div className="body__container">
                    <img src={ricLogo} className="xapp-logo"/>
                </div>
            </div>
            {/*<div className="card-container" onClick={() => goPlatform()}>*/}
            {/*    <div className="header__container">*/}
            {/*        <span className="card__title">PLATFORM STATS</span>*/}
            {/*    </div>*/}
            {/*    <div className="body__container">*/}
            {/*        <img src={statsLogo} className="xapp-logo"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );


}

Home.contextTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    })
}

export default Home;
