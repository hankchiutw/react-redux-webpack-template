"use strict";

import React from 'react';
import Nav from './Nav';

import { connect } from 'react-redux';

const mapStateToProps = (state) => (
    {
        isOn: state.appState.isNavOn
    }
);

export default connect(mapStateToProps)(Nav);
