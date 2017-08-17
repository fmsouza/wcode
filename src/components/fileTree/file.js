import React from 'react';

export default ({ name, path, onClick, selected, type }) => (
    <div className="ItemFile">
        <div className={`node ${selected && 'active'}`}  onClick={() => onClick({ name, path, type })}>
            <div className="title">{name}</div>
        </div>
    </div>
);