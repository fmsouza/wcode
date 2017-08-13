import React from 'react';
import './styles.css';

export default ({ active, file, onClickRemoveHandler }) => (
    <div className={`FileTab ${active && 'active'}`}>
        <span>{file.name}</span>
    </div>
);