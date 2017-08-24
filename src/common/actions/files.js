import * as Action from 'common/actions';
import { Writer } from 'common/connection';
import { project, fileBuffer } from 'common/stores';

let fileTreeHandler = null;

/**
 * Takes an instance of the file tree as input and use it to handle the file creation actions.
 * @param {object} ref - file tree component instance
 * @return {void}
 */
export const setFileTreeHandler = (ref) => fileTreeHandler = ref;

export const readProjectFiles = () => Writer.readProjectFiles();

export const loadFile = ({ path }) => (fileBuffer.exists(path)) ?
    Action.viewCode(path) : Writer.readFile({ path });

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

export const createNewFile = (path) => Writer.createFile({ path });

export const deleteFile = (file) => Writer.deleteFile(file);

export const triggerNewFile = () => {
    let path = '';
    if (fileBuffer.activeFile) {
        let path = fileBuffer.activeFile.path.split('/');
        path.pop();
        path = path.join('/');
    } else {
        path = project.path;
    }
    fileTreeHandler.createNewElement(path);
};

export const createNewDirectory = (path) => Writer.createDirectory({ path });

export const triggerNewDirectory = () => {
    let path = '';
    if (fileBuffer.activeFile) {
        let path = fileBuffer.activeFile.path.split('/');
        path.pop();
        path = path.join('/');
    } else {
        path = project.path;
    }
    fileTreeHandler.createNewElement(path, 'newdirectory');
};

export const saveFile = () => {
    const activeFile = fileBuffer.activeFile;
    if (!activeFile) return;
    const content = Action.getCode();
    Writer.updateFile({ ...activeFile, content });
};

export const saveAllFiles = () => fileBuffer.openedFiles.map(file => saveFile(file));

export const viewNextFile = () => {
    const nextFile = fileBuffer.nextFile;
    loadFile(nextFile);
};

export const viewPreviousFile = () => {
    const previousFile = fileBuffer.previousFile;
    loadFile(previousFile);
};