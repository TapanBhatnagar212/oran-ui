import React from 'react';
import oranLogo from './assets/oran-logo.png'
import './App.css';
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Xapp from "./Xapp";
import Platform from "./Platform";
import Ric from "./Ric";



function App() {
    const goHome = () => {
        window.location.href = "/";
    };

    return (
        <Router>
            <div className="App">
                <header className="header" onClick={() => goHome()}>
                    <div><img src={oranLogo} className="Oran-logo"/></div>
                    <div><p>RIC Dashboard</p></div>
                </header>
            <Routes>
                <Route exact path='/' exact element={<Home/>}/>
                <Route path='/xapp' element={<Xapp/>}/>
                <Route path='/ric' element={<Ric/>}/>
                {/*<Route path='/platform' element={<Platform/>}/>*/}
            </Routes>
            </div>
        </Router>);
}

export default App;
