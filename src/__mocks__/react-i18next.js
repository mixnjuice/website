import PropTypes from 'prop-types';
import React, { Component } from 'react';

const identity = key => key;

export class I18n extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  render() {
    const { children } = this.props;

    return children(identity);
  }
}

/* eslint-disable react/display-name */
export const translate = () => TranslatedComponent => props => (
  <TranslatedComponent {...props} t={identity} />
);
