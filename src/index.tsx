import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const tagManagerArgs = {
  gtmId: 'GTM-N535FZF',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
