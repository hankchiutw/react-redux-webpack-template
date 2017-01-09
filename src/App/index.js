"use strict";

import React from 'react';

import Header from './Header/';
import Nav from './Nav/';
import Content from './Content/';

const App = ({children}) => {

    return (
        <div>
            <Header />
            <Nav />
            <Content children={children} />
        </div>
    );
};

export default App;
