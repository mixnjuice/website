import React from 'react';
import renderer from 'react-test-renderer';

import Heading from './Heading';

describe('Heading', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Heading>Test</Heading>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with custom element', () => {
    const tree = renderer.create(<Heading element="h5">Test</Heading>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with modifier', () => {
    const tree = renderer
      .create(<Heading modifier="primary">Test</Heading>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
