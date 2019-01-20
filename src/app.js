import React from 'react';
import ReactDOM from 'react-dom';

import 'evil-icons/assets/evil-icons.js';

import './scss/app';

import Information from './components/information';
import ProjectsList from './components/projectsList';
import NetworkSocial from './components/networkSocial';

const App = () => <React.Fragment><Information/><ProjectsList/><NetworkSocial/></React.Fragment>;

ReactDOM.render(<App />, document.getElementById('root'));

