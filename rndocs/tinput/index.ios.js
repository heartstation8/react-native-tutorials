//imports
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

//default class
export default class InputTrans extends Component {
  constructer(props){
    super(props);
    this.setState = {text: ''};
  }

  render(){
    return (
      <View style={{padding: 10}}>
      <TextInput style={{height: 40, border: 1, borderColor: 'gray'}} placeholder="Test input" onChangeText={(text) => this.setState({text})} />
      <Text style={{padding: 10, fontSize: 42}}>
      {this.state.text.split(' ').map((word) => word && '!').join(' ')}
      </Text>
      </View>
    );
  }
}

//registration
AppRegistry.registerComponent('Input Test', () => InputTrans);
