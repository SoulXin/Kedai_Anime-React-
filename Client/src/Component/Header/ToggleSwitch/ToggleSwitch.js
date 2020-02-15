import React, { Component } from 'react';
import Switch from './Switch';

class ToggleSwitch extends Component {
    state = { enabled: true}

    toggleNotifications = ({ enabled }) => {
        this.setState({ enabled });
    }

    toggleActivityEnabled = activity => ({ enabled }) => {
        let { only } = this.state;

        if (enabled && !only.includes(activity)) {
        only.push(activity);
        return this.setState({ only });
        }

        if (!enabled && only.includes(activity)) {
        only = only.filter(item => item !== activity);
        return this.setState({ only });
        }
    }

    render() {
        const { enabled } = this.state;
        return (
            <React.Fragment>
                <Switch theme="default" className="d-flex" enabled={enabled} onStateChanged={this.toggleNotifications} />
            </React.Fragment>
        );
    }
}

export default ToggleSwitch;
