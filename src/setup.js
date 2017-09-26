import registerServiceWorker from './registerServiceWorker';
import * as Stores from 'common/stores';
import { General } from 'common/constants';
import { registerKeyboardBindings } from 'common/utils';
import { openConnection, Writer } from 'common/connection';

window.addEventListener('resize', () => Stores.view.updateDimensions());
registerKeyboardBindings();
registerServiceWorker();
openConnection();