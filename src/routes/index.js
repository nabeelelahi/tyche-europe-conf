import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import { Configurator, LandingPage } from '../pages';

export default function App(props) {

    return (
        <Routes>
            <Route path="/configurator" element={<Configurator client={props} />} />
            <Route path="/" element={<LandingPage client={props} />} />
        </Routes>
    )
}

 
