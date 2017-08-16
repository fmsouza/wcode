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

    render() {
        const { project } = this.props;
        if (project.loading) return null;
        return (
            <div className="Explorer">
                <div className="title">
                    <span>Explorer</span>
                </div>
                <FileTree
                    title={project.name}
                    onClickNode={(node) => this.onClickNode(node)}
                    content={project.content}
                />
            </div>
        );
    }
}