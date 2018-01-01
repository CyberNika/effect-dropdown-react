import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { classnames } from '../utils/index'

class EffectDropdown extends Component {
  constructor () {
    super()

    this.state = {
      active: false,
    }

    this.$el = null

    this.toggle = this.toggle.bind(this)
    this.hide = this.hide.bind(this)
    this.handleBodyClick = this.handleBodyClick.bind(this)
  }

  componentWillUpdate (nextProps, nextState) {
    const { active } = this.state

    if (this.props.autoHide && active !== nextState.active) {
      if (!active) {
        document.body.addEventListener('click', this.handleBodyClick)
      } else {
        document.body.removeEventListener('click', this.handleBodyClick)
      }
    }
  }

  componentWillUnmount () {
    if (this.props.autoHide) {
      document.body.removeEventListener('click', this.handleBodyClick)
    }
  }

  get dropdownCls () {
    return classnames({
      'effect-dropdown': true,
      'effect-dropdown--active': this.state.active,
    })
  }

  get labelCls () {
    return classnames({
      'effect-dropdown__label': true,
      'effect-dropdown__label--raise': this.props.raiseLabel,
    })
  }

  get labelStyle () {
    return {
      color: this.state.active ? this.props.activeColor : null,
    }
  }

  toggle () {
    this.setState({
      active: !this.state.active,
    })
  }

  hide () {
    this.setState({
      active: false,
    })
  }

  handleBodyClick (event) {
    const notOutside = this.$el.contains(event.target)

    if (!notOutside) {
      this.setState({
        active: false,
      })
    }
  }

  render () {
    const { effect, gutter, autoHide, children } = this.props
    const { active } = this.state
    const dropdownItemProps = {
      effect,
      gutter,
      autoHide,
      active,
      itemCount: children.length,
    }

    return (
      <div ref={(el) => { this.$el = el }} className={this.dropdownCls} role="menu">
        <span
          role="menubar"
          tabIndex={0}
          className={this.labelCls}
          style={this.labelStyle}
          onClick={this.toggle}
        >
          {this.props.label}
          <i className="effect-dropdown__label-caret effect-dropdown-iconfont" />
        </span>

        <ul className="effect-dropdown__content">
          {children.map((c, index) => {
            const newChildrenProps = {
              ...c.props,
              ...dropdownItemProps,
              key: c.key || index,
              index,
              handleHide: this.hide,
            }

            return React.cloneElement(c, newChildrenProps)
          })}
        </ul>
      </div>
    )
  }
}

EffectDropdown.propTypes = {
  label: PropTypes.string,
  raiseLabel: PropTypes.bool,
  effect: PropTypes.oneOf(['simple', 'random', 'camber', 'stagger', 'fence']),
  gutter: PropTypes.number,
  activeColor: PropTypes.string,
  autoHide: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
}

EffectDropdown.defaultProps = {
  effect: 'simple',
  label: '',
  raiseLabel: false,
  gutter: 5,
  activeColor: '#fc756f',
  autoHide: true,
  children: null,
}

export default EffectDropdown
