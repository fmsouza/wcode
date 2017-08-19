import * as Action from 'common/actions';
import { fileBuffer, project } from 'common/stores';
import { api } from 'common/utils';

export const exit = () => 
    api.get('/control/exit')
    .then(({ status, data }) => {
        if (status === 200) {
            window.close();
        }
    });