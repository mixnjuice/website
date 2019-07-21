import React from 'react';
import renderer from 'react-test-renderer';

import LocalePage from './locale';

jest.mock('components/Header', () => require('utils').mockComponent('Header'));
jest.mock('components/Footer', () => require('utils').mockComponent('Footer'));

describe('LocalePage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LocalePage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
