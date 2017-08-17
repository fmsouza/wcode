import React from 'react';
import LeftMenu from './leftMenu';
import './styles.css';

export default (props) => (
    <div className="Header">
        <div className="left side">
            <span className="name item">Monaco-web-ide</span>
            <LeftMenu className="item" />
        </div>
        <div className="right side" />
    </div>
);