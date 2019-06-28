import React from 'react';
import renderer from 'react-test-renderer';

import LocalePage from './locale';

describe('LocalePage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LocalePage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
