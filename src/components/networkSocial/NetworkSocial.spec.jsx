
import React from 'react';
import {shallow} from 'enzyme';

import NetworkSocial from './NetworkSocial';

describe('NetworkSocial', () => {
	const networkSocial = shallow(<NetworkSocial />);
	
	it('should render Network social component', () => {
		expect(networkSocial).toMatchSnapshot();
	});
});