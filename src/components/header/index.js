import React from 'react';
import './styles.css';

export default (props) => (
    <div className="Header">
        <div className="left">
            <span className="title">Monaco-web-ide</span>
        </div>
        <div className="right">
            <a href="https://github.com/fmsouza/monaco-web-ide" target="_blank" rel="noopener noreferrer">
                Github
            </a>
        </div>
    </div>
);