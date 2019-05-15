import React, { Component } from 'react';

import Heading from 'components/Heading';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

export default class Privacy extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Privacy Policy" keywords={['privacy', 'terms', 'policy']} />
        <Heading modifier="primary">Privacy Policy</Heading>
        <p>
          This site does not collect or store any personally identifiable
          information. It stores access logs containing the IP address and user
          agent making all requests. These logs are kept on an encrypted-at-rest
          server with strict access control.
        </p>
      </Layout>
    );
  }
}
