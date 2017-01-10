"use strict";

import React from 'react';

const Content = ({isNavOn, children, label}) => {
    return (
        <div className='content-wrapper' ref={_domRef}>
            <h2>{label}</h2>
            <div className='content-ui-view'>{children}</div>
        </div>
    );

    /**
     * Listen to props and change style
     * TODO: use component style
     */
    function _domRef(dom){
        if(!dom) return;

        if(isNavOn){
            dom.classList.add('nav-on');
        }
        else{
            dom.classList.remove('nav-on');
        }
    }
};

export default Content;
