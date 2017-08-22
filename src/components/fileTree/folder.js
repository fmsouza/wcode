import React from 'react';
import Icon from '../icon';
import ItemFile from './file';

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

    onRightClick(e) {
        e.preventDefault();
        const { path } = this.props;
        console.log("Right clicked:", path);
    }
    
    renderFile = (item) => <ItemFile {...item} key={item.path} onClick={this.props.onClick} />;
    
    renderFolder = (item) => <ItemFolder {...item} key={item.path} onClick={this.props.onClick} />;

    renderSubNodes = (files, folders) => (
        <div
            className="subnodes"
            children={[].concat(folders.map(this.renderFolder)).concat(files.map(this.renderFile))}
        />
    );

    render() {
        const { name, files, folders } = this.props;
        const { collapsed } = this.state;
        return (
            <div className="ItemFolder">
                <div className="node" onClick={() => this.onClick()} onContextMenu={(e) => this.onRightClick(e)}>
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