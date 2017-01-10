"use strict";

import React from 'react';

import Header from './Header/';
import Nav from './Nav/';
import Content from './Content/';

const PATH_LABEL = {
    '/': '首頁',
    '/page1': 'Page1'
};

const App = ({children, location, route}) => {

    return (
        <div>
            <Header />
            <Nav />
            <Content children={children} label={PATH_LABEL[location.pathname]} />
        </div>
    );
};

export default App;
