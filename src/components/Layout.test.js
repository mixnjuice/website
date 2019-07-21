import React from 'react';
import renderer from 'react-test-renderer';

import { PureLayout } from './Layout';

jest.mock('components/Header', () => require('utils').mockComponent('Header'));
jest.mock('components/Footer', () => require('utils').mockComponent('Footer'));

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <PureLayout
          data={{
            site: {
              siteMetadata: {
                title: 'Site',
                company: 'Company'
              }
            }
          }}
        >
          Testing
        </PureLayout>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
