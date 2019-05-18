import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <h1>Not Found (404)</h1>
    <p>Unfortunately, that page does not currently exist.</p>
  </Layout>
);

export default NotFoundPage;
