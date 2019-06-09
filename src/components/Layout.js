import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';

import 'bootswatch/dist/simplex/bootstrap.css';

import Header from './Header';
import Footer from './Footer';

export const PureLayout = ({ data, children }) => (
  <Fragment>
    <Header siteTitle={data.site.siteMetadata.title} />
    <Container>
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata.company} />
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
