import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import { Container, Row, Col } from 'react-bootstrap';

import Heading from 'components/Heading';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Home = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO
          title="{t('Home')}"
          keywords={[
            t('liquid'),
            t('e-liquid'),
            t('vape'),
            t('mixing'),
            t('juice')
          ]}
        />
        <Container>
          <Row>
            <Col>
              <Row>
                <Heading modifier="primary">Gusta Project</Heading>
              </Row>
              <Row>{t('about_stmt')}</Row>
            </Col>
          </Row>
        </Container>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(Home);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
