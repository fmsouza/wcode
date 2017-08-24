import React from 'react';
import * as Action from 'common/actions';
import './styles.css';

export default class DirectoryMenu extends React.Component {
    
    state = { collapsed: true, x: 0, y: 0 };

    componentWillMount() {
        document.addEventListener('keydown', (e) => {
            const keyCode = e.keyCode || e.which;
            if (keyCode === 27) this.setState({ collapsed: true });
        });
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', () => {});
    }
    
    toggle = (x = 0, y = 0) => this.setState({ collapsed: !this.state.collapsed, x, y });
    
    callAndClose = (fn = () => {}) => () => {
        this.toggle();
        fn();
    };
    
    onClickNewFile = () => Action.triggerNewFile(this.props.path);
    
    onClickNewDirectory = () => Action.triggerNewDirectory(this.props.path);
    
    onClickDelete = () => {
        const directoryName = this.props.path.split('/').pop();
        if (confirm(`Are you sure you want to delete '${directoryName}' and its contents?`)) {
            Action.deleteDirectory(this.props);
        }
    }

    renderMenu = (collapsed) => !collapsed && (
        <div className="menuItem" style={{ left: this.state.x, top: this.state.y }}>
            <div className="clickable item" children="New file" onClick={this.callAndClose(this.onClickNewFile)} />
            <div className="clickable item" children="New directory" onClick={this.callAndClose(this.onClickNewDirectory)} />
            <div className="clickable item" children="Delete" onClick={this.callAndClose(this.onClickDelete)} />
        </div>
    );

    render() {
        return (
            <div className="ArchiveMenu" onKeyDown={this.onKeyDown}>
                {this.renderMenu(this.state.collapsed)}
                {!this.state.collapsed && <div className="clickableOverlay" onClick={this.toggle} />}
            </div>
        );
    }
}