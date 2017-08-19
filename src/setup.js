import registerServiceWorker from './registerServiceWorker';
import * as Stores from 'common/stores';
import { registerKeyboardBindings } from 'common/utils';
import { openConnection } from 'common/connection';

window.addEventListener('resize', () => Stores.view.updateDimensions());
registerKeyboardBindings();
registerServiceWorker();
openConnection();