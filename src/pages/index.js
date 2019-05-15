import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Heading from 'components/Heading';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Home = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={['liquid', 'e-liquid', 'vape', 'mixing', 'juice']}
    />
    <Container>
      <Row>
        <Col>
          <Row>
            <Heading modifier="primary">Gusta Project</Heading>
          </Row>
          <Row>
            <p>
              This project aims to provide a free and open experience for mixing
              e-liquid.
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default Home;
