import React from 'react';

export default ({ name, path, onClick, type }) => (
    <div className="ItemFile">
        <div className="node" onClick={() => onClick({ name, path, type })}>
            <div className="title">{name}</div>
        </div>
    </div>
);