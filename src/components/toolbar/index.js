import React from 'react';
import { Icon } from '../icon';
import './styles.css';

export const Toolbar = ({ onToolSelect, ...props }) => (
    <div className="Toolbar">
        <Icon name="file" className="icon" onClick={() => onToolSelect('explorer')} />
        <Icon name="file" className="icon" onClick={() => onToolSelect('search')} />
    </div>
);