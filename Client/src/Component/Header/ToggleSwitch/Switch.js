import PropTypes from 'prop-types';
import classnames from 'classnames';
import isString from 'lodash/isString';
import React, { Component } from 'react';
import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';
import {connect} from 'react-redux'
import './Switch.css';
import {change_background_action} from '../../../Redux'
class Switch extends Component {

  state = { enabled: this.enabledFromProps() }

  isEnabled = () => this.state.enabled

  enabledFromProps() {
    let { enabled } = this.props;

    // If enabled is a function, invoke the function
    enabled = isFunction(enabled) ? enabled() : enabled;

    // Return enabled if it is a boolean, otherwise false
    return isBoolean(enabled) && enabled;
  }

    toggleSwitch = evt => {
        this.props.change_background_action(this.props.enabled ? 1 : 0)
        evt.persist();
        evt.preventDefault();

        const { onClick, onStateChanged } = this.props;

        this.setState({ enabled: !this.state.enabled }, () => {
        const state = this.state;

        // Augument the event object with SWITCH_STATE
        const switchEvent = Object.assign(evt, { SWITCH_STATE: state });

        // Execute the callback functions
        isFunction(onClick) && onClick(switchEvent);
        isFunction(onStateChanged) && onStateChanged(state);
        });
    }

  render() {
    const { enabled } = this.state;
    
    // Isolate special props and store the remaining as restProps
    const { enabled: _enabled, theme, onClick, className, onStateChanged, ...restProps } = this.props;

    // Use default as a fallback theme if valid theme is not passed
    const switchTheme = (theme && isString(theme)) ? theme : 'default';

    const switchClasses = classnames(
        `switch switch--${switchTheme}`,
        className
    )

    const togglerClasses = classnames(
        'switch-toggle',
        `switch-toggle--${enabled ? 'off' : 'on'}`
    )

        return (
            <div className={switchClasses} onClick={this.toggleSwitch} {...restProps}>
                <div className={togglerClasses}></div>
            </div>
        )
    }
}

Switch.propTypes = {
    theme: PropTypes.string,
    enabled: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ]),
    onStateChanged: PropTypes.func
}
const mapStateToProps = state => {
    return {
        background : state.header.background
    }
}

const mapDispatchToProps = dispatch => {
    return {
        change_background_action : (data) => dispatch(change_background_action(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Switch);
