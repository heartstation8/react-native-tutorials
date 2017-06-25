import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class Lsitem extends Component {
renderDesc(){
  const { library, expanded } = this.props

  if (expanded) {
    return (
      <Text>{library.description}</Text>
    );
  }
}

  render(){
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return(
      <TouchableWithoutFeedback onPress={() => this.props.select_library(id)}>
      <View>
      <CardSection>
      <Text style={titleStyle}>{title}</Text>
      </CardSection>
      {this.renderDesc()}
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.sellib === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(Lsitem);
