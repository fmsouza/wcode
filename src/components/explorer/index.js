import React from 'react';
import FileTree from '../fileTree';
import './styles.css';
import project from './mock';
import * as Action from 'common/actions';

export default class Explorer extends React.Component {

    state = { project: null };

    componentWillMount() {
        this.setState({ project });
        Action.loadProjectFiles();
    }

    onSelectFile(file) {
        console.log(file);
    }

    render() {
        const { project } = this.state;
        return (
            <div className="Explorer">
                <div className="title">
                    <span>Explorer</span>
                </div>
                <FileTree
                    title={project.name}
                    directory={project.directory}
                    onSelectFile={(file) => this.onSelectFile(file)}
                />
            </div>
        );
    }
}