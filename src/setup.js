import registerServiceWorker from './registerServiceWorker';
import * as Stores from 'common/stores';
import { registerKeyboardBindings } from 'common/utils';

export default () => {
    window.addEventListener('resize', () => Stores.view.updateDimensions());
    registerKeyboardBindings();
    registerServiceWorker();
};