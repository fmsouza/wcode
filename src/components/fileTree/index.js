import React from 'react';
import Icon from '../icon';
import './styles.css';

export default class FileTree extends React.Component {

    state = { collapsed: false };

    get iconName() {
        return (this.state.collapsed) ? 'chevron-right' : 'chevron-down';
    }

    renderFileTree() {
        if (this.state.collapsed) return null;
        return null;
    }

    render() {
        const { title, files } = this.props;
        return (
            <div className="FileTree">
                <div className="title" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                    <Icon name={this.iconName} className="icon" />
                    <span>{title}</span>
                </div>
            </div>
        );
    }
}