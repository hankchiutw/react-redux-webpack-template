import React from 'react';
import Usermenu from '../Usermenu';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleUsermenu } from './actions';

const mapStateToProps = (state) => ({
  username: `hi! ${state.appState.currentUser.username}`,
  isUsermenuOn: state.appState.isUsermenuOn
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleUsermenu
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Usermenu);
