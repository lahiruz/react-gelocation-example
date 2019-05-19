import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	state = {lat: null, errorMessage: null};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({lat: position.coords.latitude}),
			error => this.setState({errorMessage: error.message}),
		);
	}

	renderContent() {
		if (this.state.lat) {
			return <SeasonDisplay latitude={this.state.lat}/>;
		}

		if (this.state.errorMessage) {
			return <h1>Error : {this.state.errorMessage}</h1>;
		}

		return <Spinner message="Please accept location request"/>;
	}

	render() {
		return (
			<div style={{ border: "5px Black solid"}}>{this.renderContent()}</div>
		);
	}
}


ReactDOM.render(<App/>, document.querySelector('#root'));
