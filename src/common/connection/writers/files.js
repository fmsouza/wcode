import { ActionTypes } from 'common/constants';

export const readProjectFiles = (send) => send(ActionTypes.READ_PROJECT, null);

export const createFile = (send, file) => send(ActionTypes.CREATE_FILE, { file });

export const readFile = (send, file) => send(ActionTypes.READ_FILE, { file });

export const updateFile = (send, file) => send(ActionTypes.UPDATE_FILE, { file });

export const deleteFile = (send, file) => send(ActionTypes.DELETE_FILE, { file });

export const createDirectory = (send, directory) => send(ActionTypes.CREATE_DIRECTORY, { directory });

export const updateDirectory = (send, directory) => send(ActionTypes.UPDATE_DIRECTORY, { directory });

export const deleteDirectory = (send, directory) => send(ActionTypes.DELETE_DIRECTORY, { directory });