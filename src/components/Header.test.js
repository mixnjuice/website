import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

jest.mock('components/LanguageSelector', () =>
  require('utils').mockComponent('LanguageSelector')
);

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header siteTitle="Header Test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
