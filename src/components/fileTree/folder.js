import React from 'react';
import { inject, observer } from 'mobx-react';
import Icon from '../icon';
import ItemFile from './file';

@inject('fileBuffer')
@observer
export default class ItemFolder extends React.Component {

    state = { collapsed: true };
    
    get iconName() {
        return (this.state.collapsed) ? 'chevron-right' : 'chevron-down';
    }

    onClick() {
        const { name, path, onClick } = this.props;
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed }, () => onClick({ name, path, collapsed }));
    }
    
    renderFile = (item) => (
        <ItemFile
            {...item}
            key={item.path}
            selected={item.path === this.props.fileBuffer.activeFilePath}
            onClick={this.props.onClick}
        />
    );
    
    renderFolder = (item) => <ItemFolder onClick={this.props.onClick} key={item.path} {...item} />;

    renderSubNodes = (files, folders) => (
        <div className="subnodes">
            {[].concat(folders.map(this.renderFolder)).concat(files.map(this.renderFile))}
        </div>
    );

    render() {
        const { name, files, folders } = this.props;
        const { collapsed } = this.state;
        return (
            <div className="ItemFolder">
                <div className="node" onClick={() => this.onClick()}>
                    <div className="title">
                        <Icon name={this.iconName} className="icon" />
                        {name}
                    </div>
                </div>
                {!collapsed && this.renderSubNodes(files, folders)}
            </div>
        );
    }
}