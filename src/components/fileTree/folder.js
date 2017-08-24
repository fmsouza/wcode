import React from 'react';
import Icon from '../icon';
import ItemFile from './file';
import Menu from './directoryMenu';

export default class ItemFolder extends React.Component {

    state = { collapsed: true, files: [], folders: [] };
    
    get iconName() {
        return (this.state.collapsed) ? 'chevron-right' : 'chevron-down';
    }

    componentWillMount() {
        const { files, folders } = this.props;
        this.setState({ files, folders });
    }

    componentWillReceiveProps({ files, folders }) {
        this.setState({ files, folders });
    }

    onClick() {
        const { name, path, onClick } = this.props;
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed }, () => onClick({ name, path, collapsed }));
    }

    onRightClick(e) {
        e.preventDefault();
        this.refs.menu.toggle(e.clientX, e.clientY);
    }

    createElement(type) {
        const { path } = this.props;
        const { files } = this.state;
        files.push({ type, path });
        this.setState({ files });
    }
    
    renderFile = (item) => <ItemFile {...item} key={`${item.path}-${Math.random()}`} onClick={this.props.onClick} />;
    
    renderFolder = (item) => (
        <ItemFolder
            {...item}
            key={`${item.path}-${Math.random()}`}
            onClick={this.props.onClick}
            onRenderChild={this.props.onRenderChild}
            ref={ref => this.props.onRenderChild(item.path, ref)}
        />
    );

    renderSubNodes = (files, folders) => (
        <div
            className="subnodes"
            children={[].concat(folders.map(this.renderFolder)).concat(files.map(this.renderFile))}
        />
    );

    render() {
        const { collapsed, files, folders } = this.state;
        return (
            <div className="ItemFolder">
                <div className="node" onClick={() => this.onClick()} onContextMenu={(e) => this.onRightClick(e)}>
                    <div className="title">
                        <Icon name={this.iconName} className="icon" />
                        {this.props.name}
                    </div>
                </div>
                <Menu ref="menu" {...this.props} />
                {!collapsed && this.renderSubNodes(files, folders)}
            </div>
        );
    }
}