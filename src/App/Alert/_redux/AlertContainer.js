import React from 'react';
import Alert from '../Alert';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { alertMessage } from './actions';

const mapStateToProps = (state) => ({
  message: state.appState.message
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  alertMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
