import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer siteTitle="Footer Test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
