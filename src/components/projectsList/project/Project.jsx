import React from 'react';

import './project.scss';

const Project = (props) => {
    return (
      <li className="pi_Card-projectsList-li">
				<a href={props.link} target="_blank">
					<span className="pi_Card-projectsList-li-project">{props.name} </span>
					<span> - </span>
					<span className="pi_Card-projectsList-li-description">{props.description}</span>
				</a>
			</li>
    )
}

export default Project;