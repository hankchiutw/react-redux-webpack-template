"use strict";

import React from 'react';
import DropdownList from './DropdownList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { alertMessage, alertLoading } from 'App/Alert/actionCreators';

const mapStateToProps = (state) => ({
    isOn: state.appState.isUsermenuOn
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    alertMessage,
    alertLoading
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DropdownList);
