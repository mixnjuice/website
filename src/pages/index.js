import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faTools,
  faWindowRestore,
  faCode
} from '@fortawesome/free-solid-svg-icons';

import Heading from 'components/Heading';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Home = () => (
  <I18n>
    {t => (
      <Layout>
        <SEO
          title={t('home_seo_title')}
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
                <Col>
                  <Heading className="text-center" modifier="primary">
                    {t('home_heading')}
                  </Heading>
                  <h3 className="text-center">{t('about_stmt')}</h3>
                </Col>
              </Row>
              <Row>
                <CardGroup>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h4>
                          <FontAwesomeIcon icon={faDatabase} /> OpenAPI
                        </h4>
                      </Card.Title>
                      <Card.Text>
                        The heart of the Gusta Project is an OpenAPI service
                        that allows anyone to utilize our data to build open
                        source DIY software and web sites. Our flavor database
                        is built upon data collected by the DIY community, as
                        well as from manufacturers, and curated by volunteers to
                        ensure accuracy.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button
                        size="sm"
                        href="https://github.com/gusta-project/api"
                      >
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp; OpenAPI on GitHub
                      </Button>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h4>
                          <FontAwesomeIcon icon={faWindowRestore} /> Community
                          DIY Site
                        </h4>
                      </Card.Title>
                      <Card.Text>
                        Our community DIY web site is being built in parallel
                        with our OpenAPI in order to provide the community with
                        the best tools possible. We are building an open source
                        web site that can be maintained for years to come by the
                        community and your data will never be held behind a
                        paywall.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button
                        size="sm"
                        href="https://github.com/gusta-project/frontend"
                      >
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp; Source Code on GitHub
                      </Button>
                    </Card.Footer>
                  </Card>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h4>
                          <FontAwesomeIcon icon={faTools} /> Open Source Tools
                        </h4>
                      </Card.Title>
                      <Card.Text>
                        As the Gusta Project matures, we hope to provide open
                        source libraries and tools to promote the use of our
                        OpenAPI. We hope to proliferate new open source projects
                        by providing the data and libraries they need to get
                        started.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button size="sm" href="https://github.com/gusta-project">
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp; Project on GitHub
                      </Button>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Row>
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
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "locale" } }) {
      ...TranslationFragment
    }
  }
`;
