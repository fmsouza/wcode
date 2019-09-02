import React from 'react';
import ActivityBar from '../activityBar';
import Explorer from '../explorer';
import Search from '../search';
import './styles.css';

export default class Sidebar extends React.Component {

    state = { selectedTool: null };

    renderContext() {
        switch (this.state.selectedTool) {
            case 'explorer': return <div className="container"><Explorer /></div>;
            case 'search': return <div className="container"><Search /></div>;
            default: return null;
        }
    }

    render() {
        return (
            <div className="Sidebar" {...this.props}>
                <ActivityBar onToolSelect={(selectedTool) => this.setState({ selectedTool })} />
                {this.renderContext()}
            </div>
        );
    }
}