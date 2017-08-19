import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import * as stores from 'common/stores';
import App from './App';
import './setup';

const Application = () => (
    <Provider {...stores}>
        <App />
    </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));