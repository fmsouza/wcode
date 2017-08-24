import React from 'react';
import * as Action from 'common/actions';

export default class LeftMenu extends React.Component {

    state = { collapsed: { fileMenu: true } };

    get menuCollapsed() {
        return Object.keys(this.state.collapsed).map(key => this.state.collapsed[key])
            .reduce((prev, next) => prev || next, false);
    }
    
    componentWillMount() {
        document.addEventListener('keydown', (e) => {
            const keyCode = e.keyCode || e.which;
            if (keyCode === 27) this.collapseAll();
        });
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', () => {});
    }

    collapseAll = () => {
        let { collapsed } = this.state;
        collapsed = Object.keys(collapsed).reduce((prev, next) => ({ ...prev, [next]: true }), {});
        this.setState({ collapsed });
    }

    toggle = (key) => this.setState({ collapsed: { [key]: !this.state.collapsed[key] }})

    callAndClose = (fn = () => {}) => () => {
        this.collapseAll();
        fn();
    };

    renderFileMenu = (collapsed) => (
        <div className="menuItem">
            <span className="title clickable" children="File" onClick={() => this.toggle('fileMenu')} />
            {!collapsed && (
                <div className="submenu">
                    <div className="clickable item" children="New file" onClick={this.callAndClose(Action.triggerNewFile)} />
                    <div className="separator" />
                    <div className="clickable item" children="Save" onClick={this.callAndClose(Action.saveFile)} />
                    <div className="clickable item" children="Save all" onClick={this.callAndClose(Action.saveAllFiles)} />
                    <div className="separator" />
                    <div className="clickable item" children="Close file" onClick={this.callAndClose(Action.closeCurrentFile)} />
                    <div className="clickable item" children="Close all" onClick={this.callAndClose(Action.closeAllFiles)} />
                    <div className="clickable item" children="Exit" onClick={this.callAndClose(Action.exit)} />
                </div>
            )}
        </div>
    );

    render() {
        const { className } = this.props;
        return (
            <div className={`Menu ${className || ''}`}>
                {this.renderFileMenu(this.state.collapsed.fileMenu)}
                {!this.menuCollapsed && <div className="clickableOverlay" onClick={this.collapseAll} />}
            </div>
        );
    }
}