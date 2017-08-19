import { project, fileBuffer } from 'common/stores';
import { Writer } from 'common/connection';

export const readProjectFiles = (payload) => project.load(payload);

export const createFile = (payload) => {};

export const readFile = (payload) => fileBuffer.addToBuffer(payload);

export const updateFile = (payload) => console.log("File updated.");

export const deleteFile = (payload) => {
    fileBuffer.close(payload.path);
    Writer.readProjectFiles();
};