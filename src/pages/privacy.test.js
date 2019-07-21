import React from 'react';
import renderer from 'react-test-renderer';

import PrivacyPage from './privacy';

jest.mock('components/Header', () => require('utils').mockComponent('Header'));
jest.mock('components/Footer', () => require('utils').mockComponent('Footer'));

describe('PrivacyPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PrivacyPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
