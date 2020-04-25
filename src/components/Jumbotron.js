import React from 'react';

function Jumbotron(props) {
	return (
		<div
			className="jumbotron text-center"
			style={{ backgroundColor: props.backgroundColor }}
		>
			<h1>{props.text}</h1>
		</div>
	);
}

export default Jumbotron;
