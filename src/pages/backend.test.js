import React from 'react';
import renderer from 'react-test-renderer';

import Backend from './backend';

describe('BackendPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Backend />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
