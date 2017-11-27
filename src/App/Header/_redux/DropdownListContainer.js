"use strict";

import React from 'react';
import DropdownList from '../DropdownList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as alertActions } from 'App/Alert';

const mapStateToProps = (state) => ({
  isOn: state.appState.isUsermenuOn
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  alertMessage: alertActions.alertMessage,
  alertLoading: alertActions.alertLoading
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DropdownList);
