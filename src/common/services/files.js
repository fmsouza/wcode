import { api } from 'common/utils';

export const loadProjectFiles = () => api.get('/files')
    .then(({ status, data }) => {
        if (status === 200) {
            console.log(data);
        }
    });

export const loadFile = (path) => api.get(`/files?src=${path}`)
    .then(({ data, status }) => {
        if (status === 200) {
            console.log(data);
        }
    });