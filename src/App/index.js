"use strict";

import React from 'react';

import Header from './Header/';
import Nav from './Nav/';

const App = ({children}) => {

    return (
        <div>
            <Header />
            <Nav />
            <div className='content-wrapper nav-on'>
                <h2>!</h2>
                <div className='content-ui-view'>{children}</div>
            </div>
        </div>
    );
};

export default App;
