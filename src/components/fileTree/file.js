import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('fileBuffer')
@observer
export default class ItemFile extends React.Component {

    get selected() {
        const { fileBuffer, path } = this.props;
        return fileBuffer.activeFilePath === path;
    }
    
    onRightClick(e) {
        e.preventDefault();
        const { path } = this.props;
        console.log("Right clicked:", path);
    }

    render() {
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
}