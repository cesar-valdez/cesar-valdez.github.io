import React from 'react';

import './projectsList.scss';
import Project from './project/Project';

const ProjectsList = () => {
    return (
			<div className="pi_Card-projectsList">
				<span className="pi_Card-projectsList-title">Personal projects</span>
				<ul>
					<Project link={"https://inviesible.netlify.com/"} name={"Inviesible"} description={"Guitar landingpage (HTML, SASS, JADE, JS)"} />
					<Project link={"https://kit-buttons.netlify.com/"} name={"kit buttons"} description={"Set of buttons of different color, type and size (HTML, SASS)"} />
				</ul>
			</div>
    )
}

export default ProjectsList;