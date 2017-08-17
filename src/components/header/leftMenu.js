import React from 'react';

export default class LeftMenu extends React.Component {

    state = { collapsed: { fileMenu: true } };

    renderFileMenu = (collapsed) => (
        <div className="menuItem">
            <span className="title clickable" children="File" onClick={() => this.setState({ collapsed: { fileMenu: !collapsed }})} />
            {!collapsed && (
                <div className="submenu">
                    <div className="clickable item" children="New file" />
                    <div className="separator" />
                    <div className="clickable item" children="Save" />
                    <div className="clickable item" children="Save all" />
                    <div className="separator" />
                    <div className="clickable item" children="Close file" />
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