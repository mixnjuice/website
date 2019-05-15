import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Heading from 'components/Heading';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

const About = () => (
  <Layout>
    <SEO
      title="About Us"
      keywords={['about', 'explanation', 'help', 'information']}
    />
    <Container>
      <Row>
        <Col>
          <Heading modifier="primary">About Us</Heading>
          <p>
            This project aims to provide a free and open experience for mixing
            e-liquid.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default About;
