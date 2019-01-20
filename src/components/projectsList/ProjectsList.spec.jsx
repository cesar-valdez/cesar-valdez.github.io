import React from 'react';
import { shallow } from 'enzyme';

import ProjectsList from './ProjectsList';

describe('ProjectsList', () => {
    const projectsList = shallow(<ProjectsList/>);

    it('should render projectList component', () => {
        expect(projectsList).toMatchSnapshot();
    });
});