import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from './search';
import { mapStateToProps, mapDispatchToProps } from './actions';

function SearchContainer(props) {
  return <Search { ...props } />;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
