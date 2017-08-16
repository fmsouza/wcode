import React from 'react';
import Icon from '../icon';
import * as Action from 'common/actions';
import './styles.css';

export default ({ name, path, active, onClick }) => (
    <div className={`FileTab ${active && 'active'}`}>
        <div className="title" onClick={() => onClick({ name, path })}>
            <span>{name}</span>
        </div>
        {active && <Icon name="close" className="icon" onClick={() => Action.closeFile(path)} />}
    </div>
);