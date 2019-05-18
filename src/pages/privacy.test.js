import React from 'react';
import renderer from 'react-test-renderer';

import PrivacyPage from './privacy';

describe('PrivacyPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PrivacyPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
