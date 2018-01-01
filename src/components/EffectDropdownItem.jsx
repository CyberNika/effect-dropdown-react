import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { classnames, transform } from '../utils/index'

const BASE = {
  zIndex: 1500,
  offset: 3,
  itemHeight: 60,
}

class EffectDropdownItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hover: false,
      randomLeft: '',
      randomTransform: this.transform,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const { effect, active } = this.props
    const nextActive = nextProps.active

    if (active !== nextActive) {
      this.setState({
        hover: false,
      })

      if (effect === 'random') {
        this.setState({
          randomLeft: nextActive ? `${Math.floor((Math.random() * 10) - 5)}px` : 0,
          randomTransform: this.getRandomTransform(nextActive),
        })
      }
    }
  }

  get transform () {
    const { effect, index, active } = this.props
    const scale = 1 - (index / 100)

    const commonOptions = {
      default: { scale3d: [scale, scale, 1] },
      active: { scale3d: [1, 1, 1] },
    }
    const optionsMap = {
      simple: {
        ...commonOptions,
      },
      random: {
        default: {
          ...commonOptions.default,
          rotate: 0,
        },
        active: {
          ...commonOptions.active,
          rotate: `${((Math.random() * 10) - 5).toFixed(2)}deg`,
        },
      },
      camber: {
        default: {
          ...commonOptions.default,
          rotate: 0,
        },
        active: {
          ...commonOptions.active,
          rotate: `${index * 5}deg`,
        },
      },
      stagger: {
        default: {
          translate3d: [index % 2 ? '-40%' : '40%', 0, 0],
        },
        active: {
          translate3d: [0, 0, 0],
        },
      },
      fence: {
        default: {
          translate3d: [index % 2 ? '-50%' : '50%', 0, 0],
        },
        active: {
          translate3d: [0, 0, 0],
        },
      },
    }

    const defaultTransform = transform(optionsMap[effect].default)

    const activeTransfrom = transform(optionsMap[effect].active)

    return active ? activeTransfrom : defaultTransform
  }

  get itemStyle () {
    const { effect, index, active, itemCount, gutter } = this.props

    const top = active ?
      `${(index + 1) * (BASE.itemHeight + gutter)}px` :
      `${BASE.offset * index}px`

    const commonStyle = {
      top,
      transform: this.props.effect === 'random' ? this.state.randomTransform : this.transform,
      zIndex: BASE.zIndex - (index + 1),
    }

    const styleMap = {
      simple: {},
      random: {
        left: this.state.randomLeft,
        transitionDelay: active ?
          `${(itemCount - index - 1) * 100}ms` :
          `${index * 100}ms`,
      },
      camber: {
        top: active ?
          `${(BASE.itemHeight + gutter)}px` :
          commonStyle.top,
        transitionDelay: active ?
          `${(itemCount - index - 1) * 50}ms` :
          `${index * 50}ms`,
      },
      stagger: {
        top: `${(index + 1) * (BASE.itemHeight + gutter)}px`,
        opacity: Number(active),
      },
      fence: {
        top: `${(index + 1) * (BASE.itemHeight + gutter)}px`,
        opacity: Number(active),
        transitionDelay: active ?
          `${index * 100}ms` :
          `${(itemCount - index - 1) * 100}ms`,
      },
    }

    return {
      ...commonStyle,
      ...styleMap[effect],
    }
  }

  get classname () {
    return classnames({
      'effect-dropdown-item': true,
      [`effect-dropdown-item--${this.props.effect}`]: true,
      'effect-dropdown-item--active': this.props.active,
      'effect-dropdown-item--disabled': this.props.disabled,
    })
  }

  get labelStyle () {
    return {
      color: this.state.hover ? '#fff' : null,
      backgroundColor: this.state.hover ? this.props.activeColor : null,
    }
  }

  getRandomTransform (active = false) {
    const scale = 1 - (this.props.index / 100)

    const value = active ? {
      scale3d: [1, 1, 1],
      rotate: `${((Math.random() * 10) - 5).toFixed(2)}deg`,
    } : {
      scale3d: [scale, scale, 1],
      rotate: 0,
    }

    return transform(value)
  }

  handleClick (event) {
    const { disabled, autoHide, handleHide, onClick } = this.props

    if (disabled) return

    onClick && onClick({
      item: this,
      index: this.props.index,
      event,
    })

    autoHide && handleHide()
  }

  handleMouseEnter (event) {
    const { disabled, active, onMouseEnter } = this.props

    if (disabled) return
    if (!active) return

    this.setState({
      hover: true,
    })

    onMouseEnter && onMouseEnter({
      item: this,
      index: this.props.index,
      event,
    })
  }

  handleMouseLeave (event) {
    const { disabled, onMouseLeave } = this.props

    if (disabled) return

    this.setState({
      hover: false,
    })

    onMouseLeave && onMouseLeave({
      item: this,
      index: this.props.index,
      event,
    })
  }

  render () {
    return (
      <li
        role="menuitem"
        style={this.itemStyle}
        onClick={this.handleClick}
        className={this.classname}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span
          style={this.labelStyle}
          className="effect-dropdown-item__label"
        >
          { this.props.children }
        </span>
      </li>
    )
  }
}

EffectDropdownItem.propTypes = {
  disabled: PropTypes.bool,
  effect: PropTypes.oneOf(['simple', 'random', 'camber', 'stagger', 'fence']),
  gutter: PropTypes.number,
  index: PropTypes.number,
  activeColor: PropTypes.string,
  autoHide: PropTypes.bool,
  active: PropTypes.bool,
  itemCount: PropTypes.number,
  children: PropTypes.node,

  handleHide: PropTypes.func,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
}

EffectDropdownItem.defaultProps = {
  disabled: false,
  gutter: 5,
  activeColor: '#fc756f',
  autoHide: false,
  active: false,
  itemCount: 0,
  index: 0,
  effect: 'simple',
  children: null,

  handleHide: null,
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null,
}

export default EffectDropdownItem
