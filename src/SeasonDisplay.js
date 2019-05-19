import React from 'react';

import './SeasonDisplay.css';

const seasonConfig = {
	summer: {
		text: "Let's hit the beach",
		iconName: 'sun'
	},
	winter: {
		text: "Burr it is cold",
		iconName: 'snowflake'
	}
};

function getSeason(latitude) {
	const month = new Date().getMonth();

	if (month > 2 && month < 9) {
		return latitude > 0 ? 'summer' : 'winter';
	}

	return latitude > 0 ? 'winter' : 'summer';

}

const SeasonDisplay = props => {
	const season = getSeason(props.latitude);
	const {text, iconName} = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`}/>
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`}/>
		</div>
	);
};

export default SeasonDisplay;
