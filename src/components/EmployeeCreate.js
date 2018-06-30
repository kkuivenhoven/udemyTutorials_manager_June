import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
	onButtonPress(){
		//const { name, phone, shift } = this.props;
		const { name, zip, state_abbr } = this.props;
		//this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
		this.props.employeeCreate({ name, zip, state_abbr: state_abbr || 'Monday' });
	}

	render() {
		return (
			<Card>
				<EmployeeForm { ...this.props} />

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Create
					</Button>
				</CardSection>

			</Card>
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
	//const { name, phone, shift } = state.employeeForm;
	const { name, zip, state_abbr } = state.employeeForm;

	//return { name, phone, shift };
	return { name, zip, state_abbr };
};


export default connect(mapStateToProps, { 
	employeeUpdate, employeeCreate
})(EmployeeCreate);

