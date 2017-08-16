import React from 'react';
import Icon from '../icon';
import ItemFile from './file';
import ItemFolder from './folder';
import './styles.css';

export default class FileTree extends React.Component {

    state = { collapsed: false, selectedFile: null };

    get iconName() {
        return (this.state.collapsed) ? 'chevron-right' : 'chevron-down';
    }

    onClickFile(file) {
        this.setState({ selectedFile: file.path });
        this.props.onSelectFile(file);
    }

    renderFileTree() {
        const { directory } = this.props;
        return (this.state.collapsed) ? null : (
            <div />
        );
    }

    render() {
        const { title } = this.props;
        return (
            <div className="FileTree">
                <div className="title" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                    <Icon name={this.iconName} className="icon" />
                    <span>{title}</span>
                </div>
                <div className="container">
                    {this.renderFileTree()}
                </div>
            </div>
        );
    }
}