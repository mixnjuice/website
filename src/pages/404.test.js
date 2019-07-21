import React from 'react';
import renderer from 'react-test-renderer';

import NotFoundPage from './404';

jest.mock('components/Header', () => require('utils').mockComponent('Header'));
jest.mock('components/Footer', () => require('utils').mockComponent('Footer'));

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NotFoundPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
