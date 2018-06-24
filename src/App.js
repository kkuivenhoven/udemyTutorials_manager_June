import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount(){
		const config = {
			apiKey: "AIzaSyAbGdECAaQ-oOL8EofqgfWpmTMVdE3eMPY",
			authDomain: "employees-58fd5.firebaseapp.com",
			databaseURL: "https://employees-58fd5.firebaseio.com",
			projectId: "employees-58fd5",
			storageBucket: "employees-58fd5.appspot.com",
			messagingSenderId: "224213401870"
		};
		firebase.initializeApp(config);
}
	
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
