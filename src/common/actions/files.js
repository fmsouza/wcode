import * as Services from 'common/services';

export const loadProjectFiles = () => Services.loadProjectFiles();

export const loadFile = ({ path }) => Services.loadFile(path);