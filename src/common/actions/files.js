import * as Action from 'common/actions';
import * as Services from 'common/services';
import { fileBuffer } from 'common/stores';

export const loadProjectFiles = () => Services.loadProjectFiles();

export const loadFile = ({ path }) => (fileBuffer.exists(path)) ?
    Action.viewCode(path) : Services.loadFile(path);

export const closeFile = (filePath) => {
    fileBuffer.close(filePath);
    const lastOpenedFile = fileBuffer.lastOpenedFile();
    if (lastOpenedFile) Action.viewCode(lastOpenedFile);
    else Action.cleanCode();
};

export const closeCurrentFile = () => {
    const currentFilePath = fileBuffer.activeFilePath;
    closeFile(currentFilePath);
};

export const closeAllFiles = () => fileBuffer.fileStates.map(({ path }) => closeFile(path));

// TODO: Implement file creation
export const newFile = () => {};

export const saveFile = () => {
    const activeFile = fileBuffer.activeFile;
    if (!activeFile) return;
    const content = Action.getCode();
    Services.saveFile({ ...activeFile, content });
};

export const saveAllFiles = () => fileBuffer.openedFiles.map(file => saveFile(file));