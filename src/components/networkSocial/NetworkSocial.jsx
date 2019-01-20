import React from 'react';
import ReactDOM from 'react-dom';

import './networkSocial.scss'

const Networks = () => {
    return (
			<div className="pi_Card-network">
				<div className="pi_Card-network-location">
						<i data-icon="ei-location" data-size="s"></i>
						<span>Saltillo, Coahuila</span>
				</div>

				<ul className="pi_Card-network-contact">
						<li className="pi_Card-network-contact-item">
								<a href="" target="_blank">
										<i data-icon="ei-envelope" data-size="m"></i>
								</a>
						</li>
						<li className="pi_Card-network-contact-item">
								<a href="https://github.com/cesar-valdez" target="_blank">
										<i data-icon="ei-sc-github" data-size="m"></i>
								</a>
						</li>
						<li className="pi_Card-network-contact-item">
								<a href="https://www.linkedin.com/in/c%C3%A9sar-alberto-bustos-valdez-7b6a8a154/" target="_blank">
										<i data-icon="ei-sc-linkedin" data-size="m"></i>
								</a>
						</li>
				</ul>
		</div>
    )
}

export default Networks;