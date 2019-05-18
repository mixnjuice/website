import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { StaticQuery, graphql } from 'gatsby';
import React, { Fragment, Component } from 'react';

import 'bootswatch/dist/lux/bootstrap.css';

import Header from './Header';

export const PureLayout = ({ data, children }) => (
  <Fragment>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Container>
      <main>{children}</main>
      <footer className="mt-5 text-right">
        <p>
          &copy; {new Date().getFullYear()} {data.site.siteMetadata.company}.
          Released under the MIT License.
        </p>
      </footer>
    </Container>
  </Fragment>
);

PureLayout.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default class Layout extends Component {
  render() {
    const { props } = this;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                company
              }
            }
          }
        `}
        render={data => <PureLayout {...props} data={data} />}
      />
    );
  }
}
