import React from 'react';
import ReactDOM from 'react-dom';

import 'evil-icons/assets/evil-icons.js';

import './scss/app';

import NetworkSocial from './components/networkSocial';

const App = () => <NetworkSocial />;

ReactDOM.render(<App />, document.getElementById('root'));

