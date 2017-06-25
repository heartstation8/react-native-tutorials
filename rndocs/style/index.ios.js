//imports
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

//default class
export default class Styles extends Component {
  render() {
    return (
      <View>
      <Text style={stylea.red}>Red</Text>
      <Text style={[stylea.blue, stylea.red]}>Blue then Red</Text>
      </View>
    );
  }
}

//stylesheets
const stylea = StyleSheet.create({
  blue: {
  color: 'blue',
  fontWeight: 'bold',
  fontSize: 40
  },
  red: {
    color: 'red'
  }
});

//registration
AppRegistry.registerComponent('style', () => Styles);
