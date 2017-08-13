import React from 'react';
import Icon from '../icon';
import './styles.css';

export default ({ onToolSelect, ...props }) => (
    <div className="Toolbar">
        <Icon name="file" className="icon" onClick={() => onToolSelect('explorer')} />
        <Icon name="file" className="icon" onClick={() => onToolSelect('search')} />
    </div>
);