import React from 'react';
import { inject, observer } from 'mobx-react';
import * as Action from 'common/actions';

@inject('fileBuffer')
@observer
export default class ItemFile extends React.Component {

    state = { name: '', path: '', type: '' };

    get selected() {
        const { fileBuffer, path } = this.props;
        return fileBuffer.activeFilePath === path;
    }

    componentDidMount() {
        const { name, path, type } = this.props;
        if (type === 'input') this.setState({ type }, () => this.refs.newFile && this.refs.newFile.focus());
        else this.setState({ name, path, type });
    }
    
    onRightClick(e) {
        e.preventDefault();
        const { path } = this.props;
        console.log("Right clicked:", path);
    }

    onKeyPress = (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode !== 13) return;
        const path = `${this.props.path}/${e.target.value}`;
        Action.createNewFile(path);
    };

    renderEdit() {
        return (
            <div className="ItemFile">
                <div className="node">
                    <input ref="newFile" type="text" onKeyPress={this.onKeyPress} />
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
                    <div className="title">{name}</div>
                </div>
            </div>
        );
    }

    render() {
        const { type } = this.state;
        return (!type || type === 'input') ? this.renderEdit() : this.renderReadOnly();
    }
}