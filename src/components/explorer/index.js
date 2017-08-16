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

    onSelectFile(file) {
        console.log(file);
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
                    onSelectFile={(file) => this.onSelectFile(file)}
                    directory={project.content}
                />
            </div>
        );
    }
}