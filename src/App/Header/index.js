"use strict";

import Header from './Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as headerActions from './actionCreators';

const mapStateToProps = (state) => (
    {
        username: 'hi! '+state.appState.currentUser.username,
        isUsermenuOn: state.appState.isUsermenuOn
    }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(headerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
