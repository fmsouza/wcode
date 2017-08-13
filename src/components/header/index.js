import React from 'react';
import './styles.css';

export class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <div className="left">
                    <span className="title">Web-code</span>
                </div>
                <div className="right">
                    <a href="https://github.com/fmsouza/monaco-web-ide" target="_blank">Github</a>
                </div>
            </div>
        );
    }
}