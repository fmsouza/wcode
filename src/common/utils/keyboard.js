import keyboardJS from 'keyboardjs';
import * as Action from 'common/actions';

const bind = (commands, fn) => keyboardJS.on(commands, (event) => event.preventDefault() || fn());

export const registerKeyboardBindings = () => {
    bind(['ctrl + s', 'command + s'], Action.saveFile);
    bind(['ctrl + w'], Action.closeCurrentFile);
};
