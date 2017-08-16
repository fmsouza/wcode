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
    
    renderFile = (item) => <ItemFile onClick={this.props.onClick} key={item.path} {...item} />;
    
    renderFolder = (item) => <ItemFolder onClick={this.props.onClick} key={item.path} {...item} />;

    renderSubNodes() {
        if (this.state.collapsed) return null;
        const { files, folders } = this.props;
        return (
            <div className="subnodes">
                {[].concat(folders.map(this.renderFolder)).concat(files.map(this.renderFile))}
            </div>
        );
    }

    render() {
        const { name } = this.props;
        const { collapsed } = this.state;
        return (
            <div className="ItemFolder node">
                <div className="title" onClick={() => this.onClick()}>
                    <Icon name={this.iconName} className="icon" />
                    {name}
                </div>
                {this.renderSubNodes(collapsed)}
            </div>
        );
    }
}