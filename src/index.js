import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import * as stores from 'common/stores';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.addEventListener('resize', () => stores.view.updateDimensions());

const Application = () => (
    <Provider {...stores}>
        <App />
    </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
