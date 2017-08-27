import React from 'react';
import { inject, observer } from 'mobx-react';
import * as Action from 'common/actions';
import Icon from '../icon';
import Menu from './fileMenu';

@inject('fileBuffer')
@observer
export default class ItemFile extends React.Component {

    state = { name: '', path: '', type: '', abdicate: false };

    get selected() {
        const { fileBuffer, path } = this.props;
        return fileBuffer.activeFilePath === path;
    }

    componentDidMount() {
        const { name, path, type } = this.props;
        if (type === 'newfile' || type === 'newdirectory')
            this.setState({ type }, () => this.refs.newFile && this.refs.newFile.focus());
        else this.setState({ name, path, type });
    }
    
    onRightClick(e) {
        e.preventDefault();
        this.refs.menu.toggle(e.clientX, e.clientY);
    }

    onKeyPress = (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 27) return this.setState({ abdicate: true }); // 'Esc' pressed
        if (keyCode !== 13) return; // 'Enter' not pressed
        const path = `${this.props.path}/${e.target.value}`;
        return (this.state.type === 'newfile') ?
            Action.createNewFile(path) : Action.createNewDirectory(path);
    };

    onBlur = (e) => {
        if (!e.target.value) return this.setState({ abdicate: true });
        const path = `${this.props.path}/${e.target.value}`;
        return (this.state.type === 'newfile') ?
            Action.createNewFile(path) : Action.createNewDirectory(path);
    }

    renderEdit() {
        if (this.state.abdicate) return null;
        return (
            <div className="ItemFile">
                <div className="node">
                    <input ref="newFile" type="text" onKeyDown={this.onKeyPress} onBlur={this.onBlur} />
                </div>
            </div>
        );
    }

    renderReadOnly() {
        const { name, path, onClick, type } = this.props;
        return (
            <div className="ItemFile">
                <div
                    className={`node ${this.selected && 'active'}`}
                    onClick={() => onClick({ name, path, type })}
                    onContextMenu={(e) => this.onRightClick(e)}
                >
                    <Icon name="file" className="icon" />
                    <div className="title">{name}</div>
                </div>
                <Menu ref="menu" {...this.props} />
            </div>
        );
    }

    render() {
        const { type } = this.state;
        return (!type || type === 'newfile' || type === 'newdirectory') ?
            this.renderEdit() : this.renderReadOnly();
    }
}