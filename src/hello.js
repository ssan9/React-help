import React from "react";

export default function Hello(props) {
	return(
		<div>
			<h1>Hello World!{props.tie}</h1>
			<p>Hello {props.tie}</p>
			<p>Hi</p>
		</div>	
	);
} 