import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';

import { mapStateToProps, mapDispatchToProps } from './actions';

function HeaderContainer(props) {
  return (
    <Header { ...props } />
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
