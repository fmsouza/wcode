import React from 'react';
import { Toolbar } from '../toolbar';
import './styles.css';

export class Sidebar extends React.Component {

    render() {
        return (
            <div className="Sidebar" {...this.props}>
                <Toolbar />
                <div className="container">
                    Sidebar
                </div>
            </div>
        );
    }
}