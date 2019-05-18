const React = require('react');
const gatsby = jest.requireActual('gatsby');

export const staticData = {
  site: {
    siteMetadata: {
      title: 'Site',
      company: 'Company',
      description: 'Something',
      keywords: ['test'],
      googleAnalyticsId: '1234'
    }
  }
};

/* eslint-disable no-unused-vars */
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to
      })
  ),
  StaticQuery: jest.fn().mockImplementation(({ render }) => render(staticData)),
  useStaticQuery: jest.fn().mockImplementation(() => staticData)
};
