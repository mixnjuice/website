import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component } from 'react';

import './Heading.scss';

export const modifiers = ['primary'];

export default class Heading extends Component {
  static propTypes = {
    className: PropTypes.string,
    element: PropTypes.string,
    modifier: PropTypes.oneOf(modifiers),
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    element: 'h1'
  };

  render() {
    const { element: Element, modifier, children, className } = this.props;

    const mainClass = 'gp-heading';
    const modifierClass = modifier ? `${mainClass}--${modifier}` : false;

    return (
      <Element className={classNames(mainClass, modifierClass, className)}>
        {children}
      </Element>
    );
  }
}
