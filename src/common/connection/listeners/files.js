import * as Action from 'common/actions';
import { project, fileBuffer } from 'common/stores';
import { Writer } from 'common/connection';

export const readProjectFiles = (payload) => project.load(payload);

export const createFile = (file) => {
    Writer.readProjectFiles();
    readFile(file);
}

export const readFile = (file) => {
    fileBuffer.addToBuffer(file);
    Action.viewCode(file.path);
}

export const updateFile = ({ path }) => console.log("Updated:", path);

export const deleteFile = (file) => {
    fileBuffer.close(file.path);
    Writer.readProjectFiles();
};