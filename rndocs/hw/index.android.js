//imports
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class hw extends Component {
  render() {
    return (
      <Text>Hello World!</Text>
    );
  }
}

//registration
AppRegistry.registerComponent('hw', () => hw);
