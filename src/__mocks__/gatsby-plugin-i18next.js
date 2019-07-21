import React, { Component, createElement } from 'react';

export class Link extends Component {
  render() {
    return createElement('Link', this.props);
  }
}

/* eslint-disable react/display-name */
export const withI18next = () => WrappedComponent => props => (
  <WrappedComponent {...props} />
);
