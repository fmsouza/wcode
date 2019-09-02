import { fileBuffer } from 'common/stores';

let editorViewHandler = null;
let editorHandler = null;

export const setEditorViewHandler = (ref) => editorViewHandler = ref;

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
    const { content, name } = fileBuffer.activeFile;
    editorHandler.loadCode(content, getLanguage(name.split('.').pop().toLowerCase()));
}

export const updateDimensions = () => {
    editorViewHandler.updateDimensions();
}

export const cleanCode = () => editorHandler.loadCode('', '');

export const getCode = () => editorHandler.code;

const getLanguage=(extension)=>{
    if(extension==='js'){
        return 'javascript'
    }else if(extension==='ts'){
        return 'typescript'
    }else if(extension==='py'){
        return 'python'
    }else if(extension==='md'){
        return 'markdown'
    }else if(extension==='sh'){
        return 'shell'
    }else if(extension==='yml'){
        return 'yaml'
    }else if(extension==='rb'){
        return 'ruby'
    }else if(extension==='h'){
        return 'cpp'
    }
    return extension
}