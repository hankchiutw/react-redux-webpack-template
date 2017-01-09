"use strict";

import React from 'react';
import { Link } from 'react-router';

const Nav = ({isOn}) => {

    return (
        <div ref={_domRef}>
            <div className='nav-wrapper'>
                <p className='item'>
                    <Link to='/page1'>Page1</Link>
                </p>
            </div>
            <div className='content-mask'></div>
        </div>
    );

    /**
     * Listen to props and change style
     */
    function _domRef(dom){
        if(!dom) return;

        if(isOn){
            dom.querySelector('.nav-wrapper').classList.add('on');
            dom.querySelector('.content-mask').classList.add('on');
        }
        else{
            dom.querySelector('.nav-wrapper').classList.remove('on');
            dom.querySelector('.content-mask').classList.remove('on');
        }
    }
};

export default Nav;
