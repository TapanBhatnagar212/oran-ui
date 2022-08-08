import xappLogo from './assets/intelligence.png'
import ricLogo from './assets/xAppControl.png'
import statsLogo from './assets/latency.png'
import './App.css';

function Platform() {
    return (

        <div className="main-container">

            <div className="card-container">
                <div className="header__container">
                    <span className="card__title">PLATFORM STATS</span>
                </div>
                <div className="body__container">
                    <img src={statsLogo} className="xapp-logo"/>
                </div>
            </div>
        </div>
    );
}

export default Platform;
