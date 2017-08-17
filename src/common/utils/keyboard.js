import keyboardJS from 'keyboardjs';
import * as Action from 'common/actions';

export const registerKeyboardBindings = () => {
    keyboardJS.on(['ctrl + s', 'command + s'], (event) => {
        event.preventDefault();
        Action.saveFile();
    });
    keyboardJS.on(['ctrl + w'], (event) => {
        event.preventDefault();
        Action.closeCurrentFile();
    });
};
