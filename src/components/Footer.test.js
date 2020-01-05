import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

Date.now = jest.fn(() => new Date(2020, 0, 1, 12));

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer siteTitle="Footer Test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
