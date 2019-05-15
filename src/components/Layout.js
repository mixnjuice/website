import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { StaticQuery, graphql } from 'gatsby';
import React, { Fragment, Component } from 'react';

import 'bootswatch/dist/lux/bootstrap.css';

import Header from './Header';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
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
        render={data => (
          <Fragment>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Container>
              <main>{this.props.children}</main>
              <footer className="mt-5 text-right">
                <p>
                  &copy; {new Date().getFullYear()} Gusta Project. Released
                  under the MIT License.
                </p>
              </footer>
            </Container>
          </Fragment>
        )}
      />
    );
  }
}
