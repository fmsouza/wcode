import * as Action from 'common/actions';
import * as Services from 'common/services';
import { fileBuffer } from 'common/stores';

export const loadProjectFiles = () => Services.loadProjectFiles();

export const loadFile = ({ path }) => (fileBuffer.exists(path)) ?
    Action.viewCode(path) : Services.loadFile(path);