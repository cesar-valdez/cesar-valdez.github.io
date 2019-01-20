import React from 'react';
import { shallow } from 'enzyme';

import Information from './Information';

describe('Information', () => {
    const information = shallow(<Information />);

    it('should render information component', () => {
        expect(information).toMatchSnapshot();
    })
});