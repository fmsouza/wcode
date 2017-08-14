import React from 'react';
import FileTree from '../fileTree';
import './styles.css';
import project from './mock';

export default class Explorer extends React.Component {

    state = { project: null };

    componentWillMount() {
        this.setState({ project });
    }

    render() {
        const { project } = this.state;
        return (
            <div className="Explorer">
                <div className="title">
                    <span>Explorer</span>
                </div>
                <FileTree title={project.name} directory={project.directory} />
            </div>
        );
    }
}