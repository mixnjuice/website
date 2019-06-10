import React from 'react';
import renderer from 'react-test-renderer';

import i18n from './i18n';

describe('i18nPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<i18n />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
