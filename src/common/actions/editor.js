import { fileBuffer } from 'common/stores';

let editorHandler = null;

/**
 * Takes an instance of the code editor as input and use it to handle the code change actions.
 * @param {object} ref - code editor instance
 * @return {void}
 */
export const setEditorHandler = (ref) => editorHandler = ref;

export const viewCode = (filePath) => {
    const previousPath = fileBuffer.activeFilePath;
    if (previousPath) {
        const code = getCode();
        fileBuffer.updateCode(previousPath, code);
    }
    fileBuffer.selectFile(filePath);
    const { content, type } = fileBuffer.activeFile;
    editorHandler.loadCode(content, type.split('/').pop());
}

export const cleanCode = () => editorHandler.loadCode('', '');

export const getCode = () => editorHandler.code;