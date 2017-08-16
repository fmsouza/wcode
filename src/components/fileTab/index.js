import React from 'react';
import './styles.css';

export default ({ name, path, active, onClick }) => (
    <div className={`FileTab ${active && 'active'}`} onClick={() => onClick({ name, path })}>
        <span>{name}</span>
    </div>
);