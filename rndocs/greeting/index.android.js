//imports
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

export default class Greet extends Component {
  render(){
    return(
      <View style={{alignItems: 'center'}}>
      <Greeting name='Joshua' />
      <Greeting name='Andy' />
      <Greeting name='Nathaniel' />
      </View>
    );
  }
}

//registration
AppRegistry.registerComponent('greeting', () => Greet);
