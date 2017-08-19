import { Writers } from 'common/connection';

export default (message) => {
    console.log("keep alive", message);
    Writers.keepAlive();
};