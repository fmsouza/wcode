import { api } from 'common/utils';

export const exit = () => 
    api.get('/control/exit')
    .then(({ status, data }) => {
        if (status === 200) {
            window.open('', '_self', ''); window.close();            
        }
    });