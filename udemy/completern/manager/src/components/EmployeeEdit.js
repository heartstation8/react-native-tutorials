import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state ={showModal: false};

  componentWillMount(){
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPress(){
    const { name, phone, shift, employee } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: employee.uid });
  }

  onTextPress(){
    const {name, phone, shift} = this.props;
    Communications.text(phone, `Hello ${name}! Your new weekly schedule is set to ${shift}`);
  }

  onAccept(){
    const {uid} = this.props.employee;
    this.props.employeeDelete({uid});
  }

  onDecline(){
    this.setState({showModal: false});
  }

  render(){
    return (
      <Card style={{flex: 1}}>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
          <Button onPress={this.onTextPress.bind(this)}>Text</Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({showModal: !this.state.showModal})}>Fire</Button>
        </CardSection>
        <Confirm
          text={`Please confirm firing of ${this.props.name}.`}
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        />
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);
