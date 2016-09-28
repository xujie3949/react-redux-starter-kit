import React, { Component, PropTypes } from 'react';
import Header from '../../components/Header';
import './CoreLayout.scss';
import '../../styles/core.scss';

class CoreLayout extends Component {
  render() {
    return (
      <div className="container text-center">
        <Header />
        <div className="core-layout__viewport">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CoreLayout;
