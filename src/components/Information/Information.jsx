import React from 'react';

import './information.scss';

const Information = () => {
    return (
			<div>
				<h1 className="pi_Card-information-name">César Valdez</h1><span className="pi_Card-information-dot"></span>
				<h2 className="pi_Card-information-ocupation">Front-end developer at <span className="pi_Card-information-ocupation-place">Mifiel</span></h2>
				<p className="pi_Card-information-description">
					Hi guys! my name is César, I am front-end developer. I have more than 2 years of 
					experience creating web applications under the following tenchologies: HTML, CSS, 
					SASS, Bootstrap, Foundation, Wordpress, jQuery and React, always taking into account 
					a good semantic structure in HTML, therefore responsible for responsive design for 
					all devices and browsers, good user experience and optimization of the applications.
				</p>
			</div>
    )
}

export default Information;