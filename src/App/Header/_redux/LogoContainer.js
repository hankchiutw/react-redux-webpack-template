import React from 'react';
import Logo from '../Logo';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleNav } from './actions';

const mapStateToProps = (state) => (
  {
    isNavOn: state.appState.isNavOn
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleNav
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
