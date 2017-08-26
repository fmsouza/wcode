import registerServiceWorker from './registerServiceWorker';
import * as Stores from 'common/stores';
import { General } from 'common/constants';
import { registerKeyboardBindings } from 'common/utils';
import { openConnection, Writer } from 'common/connection';

window.addEventListener('resize', () => Stores.view.updateDimensions());
!General.DEBUG && window.addEventListener('unload', () => Writer.exit()); // When closing the view
registerKeyboardBindings();
registerServiceWorker();
openConnection();