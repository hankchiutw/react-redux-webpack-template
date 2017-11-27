"use strict";

import React from 'react';
import NewComponentTemplate from '../NewComponentTemplate';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import { alertMessage } from './actions';

const mapStateToProps = (state) => ({
  //message: state.appState.message
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
 // alertMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewComponentTemplate);
