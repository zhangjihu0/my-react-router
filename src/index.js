import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './router/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Text />, document.getElementById('root'));
registerServiceWorker();
