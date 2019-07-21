import React from 'react';
import renderer from 'react-test-renderer';

import AboutPage from './about';

jest.mock('components/Header', () => require('utils').mockComponent('Header'));
jest.mock('components/Footer', () => require('utils').mockComponent('Footer'));

describe('AboutPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AboutPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
