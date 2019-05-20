import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import { Container, Row, Col } from 'react-bootstrap';

import Heading from 'components/Heading';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

const About = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO
          title="{t('about_us'}"
          keywords={[t('about'), t('explanation'), t('help'), t('information')]}
        />
        <Container>
          <Row>
            <Col>
              <Heading modifier="primary">About Us</Heading>
              <p>{t('about_stmt')}</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(About);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
