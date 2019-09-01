import React from 'react';
import Icon from '../icon';
import './styles.css';
import * as Action from 'common/actions';

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
        return (
            <div className="Toolbar">
                <div className="top">
                    <Icon
                        name="explorer"
                        className={`icon ${this.isActive(TOOL_EXPLORER)}`}
                        onClick={() => {
                            if (this.isActive(TOOL_EXPLORER)) {
                                this.selectOption(null);
                            } else {
                                this.selectOption(TOOL_EXPLORER);
                            }
                            Action.updateDimensions();
                        }}
                    />
                    {/*
                        <Icon
                            name="search"
                            className={`icon ${this.isActive(TOOL_SEARCH)}`}
                            onClick={() => this.selectOption(TOOL_SEARCH)}
                        />
                    */}
                </div>
                <div className="bottom" />
            </div>
        );
    }
}