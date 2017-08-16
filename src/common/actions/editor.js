import { fileBuffer } from 'common/stores';

let editorHandler = null;
/**
 * Takes an instance of the code editor as input and use it to handle the code change actions.
 * @param {object} ref - code editor instance
 * @return {void}
 */
export const setEditorHandler = (ref) => editorHandler = ref;

export const viewCode = (filePath) => {
    fileBuffer.selectFile(filePath);
    const { content, type } = fileBuffer.activeFile;
    editorHandler.loadCode(content, type.split('/').pop());
}