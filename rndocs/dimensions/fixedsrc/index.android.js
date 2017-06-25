//imports
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

//default class
export default class FixedDimensions extends Component {
  render(){
    return(
      <View>
      <View style={{width: 50, height:50, backgroundColor: 'powderblue'}} />
      <View style={{width: 150, height:150, backgroundColor: 'skyblue'}} />
      <View style={{width: 250, height:250, backgroundColor: 'steelblue'}} />
      </View>
    );
}
}

//registration
AppRegistry.registerComponent('dimensions', () => FixedDimensions);
