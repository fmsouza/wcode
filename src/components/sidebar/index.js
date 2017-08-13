import React from 'react';
import { Toolbar } from '../toolbar';
import { Explorer } from '../explorer';
import { Search } from '../search';
import './styles.css';

export class Sidebar extends React.Component {

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
                <Toolbar onToolSelect={(selectedTool) => this.setState({ selectedTool })} />
                <div className="container">
                    {this.renderContext()}
                </div>
            </div>
        );
    }
}