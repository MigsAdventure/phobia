import React, { Component } from 'react';
import VRScene from './MainMenu';
import Layout from './Layout';
import { connect } from 'react-redux';

@connect(state => ({
  vrmode: state.vrmode
}))
export default class Root extends Component {
  render() {
    const { vrmode } = this.props;

    if (vrmode) {
      return <MainMenu />;
    } else {
      return <Layout />;
    }
  }
}
