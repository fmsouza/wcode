import React from 'react';
import ActivityBar from '../activityBar';
import Explorer from '../explorer';
import Search from '../search';
import './styles.css';

export default class Sidebar extends React.Component {

    state = { selectedTool: null };

    renderContext() {
        switch (this.state.selectedTool) {
            default:
            case 'explorer':
                return <Explorer />;
                
            case 'search':
                return <Search />;
        }
    }

    render() {
        return (
            <div className="Sidebar" {...this.props}>
                <ActivityBar onToolSelect={(selectedTool) => this.setState({ selectedTool })} />
                <div className="container">
                    {this.renderContext()}
                </div>
            </div>
        );
    }
}