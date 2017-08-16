import React from 'react';
import './styles.css';

export default ({ name, active }) => (
    <div className={`FileTab ${active && 'active'}`}>
        <span>{name}</span>
    </div>
);