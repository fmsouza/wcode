import * as Action from 'common/actions';
import { fileBuffer, project } from 'common/stores';
import { api } from 'common/utils';

export const loadProjectFiles = () => 
    Promise.resolve(project.isLoading(true))
    .then(() => api.get('/files'))
    .then(({ status, data }) => {
        if (status === 200) {
            project.load(data);
        }
    })
    .then(() => project.isLoading(false));

export const loadFile = (filePath) => 
    Promise.resolve(project.isLoading(true))
    .then(() => api.get(`/files?src=${filePath}`))
    .then(({ data, status }) => {
        if (status === 200) {
            fileBuffer.addToBuffer(data);
            Action.viewCode(data.path);
        }
    })
    .then(() => project.isLoading(false));