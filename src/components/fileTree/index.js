import React from 'react';
import Icon from '../icon';
import ItemFile from './file';
import ItemFolder from './folder';
import * as Action from 'common/actions';
import './styles.css';

export default class FileTree extends React.Component {

    state = { collapsed: false };

    get iconName() {
        return (this.state.collapsed) ? 'chevron-right' : 'chevron-down';
    }

    collapseAll() {
        const collapsed = true;
        this.setState({ collapsed }, () => this.setState({ collapsed: !collapsed }));
    }
    
    renderFile = (item) => <ItemFile {...item} key={item.path} onClick={this.props.onClickNode} />;
    
    renderFolder = (item) => <ItemFolder {...item} key={item.path} onClick={this.props.onClickNode} />;

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
                <div className="rootTitle title">
                    <div className="left column" onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                        <Icon name={this.iconName} className="icon" />
                        {title}
                    </div>
                    <div className="right column">
                        <Icon name="refresh" className="icon" onClick={Action.readProjectFiles} />
                        <Icon name="collapse" className="icon" onClick={() => this.collapseAll()} />
                    </div>
                </div>
                {this.renderFileTree(this.state.collapsed)}
            </div>
        );
    }
}