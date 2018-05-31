import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav';


const mapStateToProps = (state) => (
  {
    isOn: state.appState.isNavOn
  }
);

export default withRouter(connect(mapStateToProps)(Nav));
