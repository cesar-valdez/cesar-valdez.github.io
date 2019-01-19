import React from 'react';
import ReactDOM from 'react-dom';

import 'evil-icons/assets/evil-icons.js';

import './scss/app';

import NetworkSocial from './components/networkSocial';
import Information from './components/information';

const App = () => <React.Fragment><Information/><NetworkSocial/></React.Fragment>;

ReactDOM.render(<App />, document.getElementById('root'));

