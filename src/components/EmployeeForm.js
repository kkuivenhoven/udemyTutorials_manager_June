import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button, Input, Zip } from './common';

class EmployeeForm extends Component {
	render() {
		return (
			<View>
				<CardSection>
					<Input
						label="Skate spot name"
						placeholder="Chico Skatepark"
						value={this.props.name}
						onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
					/>
				</CardSection>

				<CardSection>
					<Zip
						label="Zip"
						placeholder="95928"
						value={this.props.zip}
						onChangeText={value => this.props.employeeUpdate({ prop: 'zip', value })}
					/>
				</CardSection>

				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<Picker
						style={{ flex: 1 }}
						selectedValue={this.props.state_abbr}
						onValueChange={value => this.props.employeeUpdate({ prop: 'state_abbr', value})}
					>
						<Picker.Item label="AL" value="AL" />
						<Picker.Item label="AK" value="AK" />
						<Picker.Item label="AZ" value="AZ" />
						<Picker.Item label="AR" value="AR" />
						<Picker.Item label="CA" value="CA" />
						<Picker.Item label="CO" value="CO" />
						<Picker.Item label="CT" value="CT" />
					</Picker>
				</CardSection>

			</View>
		);
	}
}


const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};


const mapStateToProps = (state) => {
	const { name, zip, state_abbr } = state.employeeForm;
	
	return { name, zip, state_abbr };
};


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
