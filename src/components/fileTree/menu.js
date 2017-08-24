import React from 'react';
import './styles.css';

export default class ArchiveMenu extends React.Component {
    
    state = { collapsed: true, x: 0, y: 0 };
    
    toggle = (x = 0, y = 0) => this.setState({ collapsed: !this.state.collapsed, x, y });
    
    callAndClose = (fn = () => {}) => () => {
        this.toggle();
        fn();
    };
    
    onClickOpen = () => {
        console.log("Attempting to open file...");
    }
    
    onClickDelete = () => {
        console.log("Attempting to delete file...");
    }

    renderMenu = (collapsed) => !collapsed && (
        <div className="menuItem" style={{ left: this.state.x, top: this.state.y }}>
            <div className="clickable item" children="Open" onClick={this.callAndClose(this.onClickOpen)} />
            <div className="clickable item" children="Delete" onClick={this.callAndClose(this.onClickDelete)} />
        </div>
    );

    render() {
        return (
            <div className="ArchiveMenu">
                {this.renderMenu(this.state.collapsed)}
                {!this.state.collapsed && <div className="clickableOverlay" onClick={this.toggle} />}
            </div>
        );
    }
}