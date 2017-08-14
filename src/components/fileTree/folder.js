import React from 'react';
import Icon from '../icon';

export default class ItemFolder extends React.Component {

    state = { collapsed: true };
    
    get iconName() {
        return (this.state.collapsed) ? 'chevron-right' : 'chevron-down';
    }

    onClick() {
        this.setState({ collapsed: !this.state.collapsed });
        this.props.onclick();
    }

    render() {
        return (
            <a className="itemFolder" onClick={() => this.onClick()}>
                <Icon name={this.iconName} className="icon" />
                {this.props.name}
            </a>
        );
    }
}