import React from 'react';
import renderer from 'react-test-renderer';

import IndexPage from './index';

jest.mock('components/Header', () => require('utils').mockComponent('Header'));
jest.mock('components/Footer', () => require('utils').mockComponent('Footer'));

describe('HomePage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IndexPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
