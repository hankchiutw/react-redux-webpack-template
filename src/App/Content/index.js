"use strict";

import React from 'react';
import Content from './Content';

import { connect } from 'react-redux';

const mapStateToProps = (state) => (
    {
        isNavOn: state.appState.isNavOn
    }
);

export default connect(mapStateToProps)(Content);
