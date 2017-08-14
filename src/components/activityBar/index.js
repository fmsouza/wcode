import React from 'react';
import Icon from '../icon';
import './styles.css';

const TOOL_EXPLORER = 'explorer';
const TOOL_SEARCH = 'search';

export default class ActivityBar extends React.Component {

    state = { active: null };

    componentDidMount() {
        this.selectOption(TOOL_EXPLORER);
    }

    selectOption(id) {
        this.props.onToolSelect(id);
        this.setState({ active: id });
    }

    isActive = (id) => (this.state.active === id) ? 'active' : '';

    render() {
        const { onToolSelect, ...props } = this.props;
        return (
            <div className="Toolbar">
                <Icon
                    name="explorer"
                    className={`icon ${this.isActive(TOOL_EXPLORER)}`}
                    onClick={() => this.selectOption(TOOL_EXPLORER)}
                />
                <Icon
                    name="search"
                    className={`icon ${this.isActive(TOOL_SEARCH)}`}
                    onClick={() => this.selectOption(TOOL_SEARCH)}
                />
            </div>
        );
    }
}