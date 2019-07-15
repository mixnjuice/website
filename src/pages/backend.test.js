import React from 'react';
import renderer from 'react-test-renderer';

import Backend from './backend';

jest.mock('components/Header', () => require('utils').mockComponent('Header'));
jest.mock('components/Footer', () => require('utils').mockComponent('Footer'));

describe('BackendPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Backend />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
