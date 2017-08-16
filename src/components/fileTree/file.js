import React from 'react';

export default ({ name, path, onClick, type }) => (
    <div className="ItemFile node" onClick={() => onClick({ name, path, type })}>
        <div className="title">{name}</div>
    </div>
);