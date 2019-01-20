import React from 'react';
import { shallow } from 'enzyme';

import Project from './Project';

describe('Project', () => {
    const project = shallow(<Project />);

    it('should render Project component', () => {
        expect(project).toMatchSnapshot();
    });
});