import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import { Configurator } from '../pages';

export default function App(props) {

    return (
        <Routes>
            <Route path="/" element={<Configurator client={props} />} />
        </Routes>
    )
}

 
