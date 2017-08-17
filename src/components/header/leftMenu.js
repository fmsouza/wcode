import React from 'react';
import * as Action from 'common/actions';

export default class LeftMenu extends React.Component {

    state = { collapsed: { fileMenu: true } };

    callAndClose = (fn = () => {}) => () => {
        this.setState({ collapsed: { fileMenu: !this.state.collapsed.fileMenu }});
        fn();
    };

    renderFileMenu = (collapsed) => (
        <div className="menuItem">
            <span className="title clickable" children="File" onClick={this.callAndClose()} />
            {!collapsed && (
                <div className="submenu">
                    <div className="clickable item" children="New file" onClick={this.callAndClose(Action.newFile)} />
                    <div className="separator" />
                    <div className="clickable item" children="Save" onClick={this.callAndClose(Action.saveFile)} />
                    <div className="clickable item" children="Save all" onClick={this.callAndClose(Action.saveAllFiles)} />
                    <div className="separator" />
                    <div className="clickable item" children="Close file" onClick={this.callAndClose(Action.closeCurrentFile)} />
                </div>
            )}
        </div>
    );

    render() {
        const { className } = this.props;
        return (
            <div className={`Menu ${className || ''}`}>
                {this.renderFileMenu(this.state.collapsed.fileMenu)}
            </div>
        );
    }
}