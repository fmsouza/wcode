import React from 'react';
import { inject, observer } from 'mobx-react';
import Icon from '../icon';
import ItemFile from './file';
import ItemFolder from './folder';
import './styles.css';

@inject('fileBuffer')
@observer
export default class FileTree extends React.Component {

    state = { collapsed: false };

    get iconName() {
        return (this.state.collapsed) ? 'chevron-right' : 'chevron-down';
    }
    
    renderFile = (item) => (
        <ItemFile
            {...item}
            key={item.path}
            selected={item.path === this.props.fileBuffer.activeFilePath}
            onClick={this.props.onClickNode}
        />
    );
    
    renderFolder = (item) => <ItemFolder onClick={this.props.onClickNode} key={item.path} {...item} />;

    renderFileTree(collapsed) {
        if (collapsed) return null;
        const { content: { files, folders } } = this.props;
        return (
            <div className="rootContent subnodes no-padding">
                {[].concat(folders.map(this.renderFolder)).concat(files.map(this.renderFile))}
            </div>
        );
    }

    render() {
        const { title } = this.props;
        return (
            <div className="FileTree">
                <div className="rootTitle title" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                    <Icon name={this.iconName} className="icon" />
                    {title}
                </div>
                {this.renderFileTree(this.state.collapsed)}
            </div>
        );
    }
}