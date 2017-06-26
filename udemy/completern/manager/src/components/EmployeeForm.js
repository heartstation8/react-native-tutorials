import React, { Component } from 'react';
import { CardSection, Input } from './common';
import { Picker, Text, View } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { connect } from 'react-redux';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="(###) ### - ####"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}
          />
        </CardSection>

        <CardSection style={{flexDirection: 'column'}}>
          <Text styles={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}
            style={{height:50, paddingRight:10}}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardSection>
        </View>
      );
    }
  }

  const styles = {
    picketLabelStyle:{
      fontSize: 18,
      paddingLeft:20,
    }
  };

  const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return {name, phone, shift };
  };

  export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeForm);
