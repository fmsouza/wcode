import React from 'react';
import { inject, observer } from 'mobx-react';
import FileTree from '../fileTree';
import './styles.css';
import * as Action from 'common/actions';

@inject('project')
@observer
export default class Explorer extends React.Component {

    componentWillMount() {
        Action.loadProjectFiles();
    }

    onClickNode(node) {
        if (node.type) Action.loadFile(node);
    }

    renderFileTree() {
        const { project } = this.props;
        if (project.loading || !project.name) return null;
        return (
            <FileTree
                title={project.name}
                onClickNode={(node) => this.onClickNode(node)}
                content={project.content}
            />
        );

    }

    render() {
        return (
            <div className="Explorer">
                <div className="title">
                    <span>Explorer</span>
                </div>
                {this.renderFileTree()}
            </div>
        );
    }
}