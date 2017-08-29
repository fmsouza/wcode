import React from 'react';
import Icon from '../icon';
import * as Action from 'common/actions';
import './styles.css';

export default ({ name, path, active, onClick }) => (
    <div className={`FileTab ${active && 'active'}`}>
        <div className={`FileTab ${active && 'active'}`} onClick={() => onClick({ name, path })}>
            <div className="title" children={name} onClick={() => onClick({ name, path })} />
        </div>
        {active && <Icon name="close" className="icon" onClick={() => Action.closeFile(path)} />}
    </div>
);