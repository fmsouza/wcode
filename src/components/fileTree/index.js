import React from 'react';
import NestedFileTreeView from 'react-nested-file-tree'; // Reference: https://github.com/woodpig07/react-nested-file-tree
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
        // console.log(file);
    }

    onClickFolder(name, currentPath, folderObj) {
        // console.log(arguments);
    }

    renderFileTree() {
        const { directory } = this.props;
        return (this.state.collapsed) ? null : (
            <NestedFileTreeView
                className="directory"
                selectedFilePath={this.state.selectedFile}
                fileClickHandler={(file) => this.onClickFile(file)}
                folderClickHandler={(name, currentPath, folderObj) => this.onClickFolder(name, currentPath, folderObj)}
                directory={directory}
                fileTemplate={ItemFile}
                folderTemplate={(props) => <ItemFolder {...props} />}
            />
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