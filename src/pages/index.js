import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faTools,
  faWindowRestore,
  faCode,
  faLanguage,
  faHandsHelping
} from '@fortawesome/free-solid-svg-icons';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Heading from 'components/Heading';

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
                  <Card bg="dark" text="white">
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h4>
                          <FontAwesomeIcon icon={faDatabase} />
                          &nbsp;{t('home_section_api_title')}
                        </h4>
                      </Card.Title>
                      <Card.Text>{t('home_section_api_text')}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        href="https://github.com/gusta-project/api"
                      >
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp; OpenAPI on GitHub
                      </Button>
                      &nbsp;
                      <Button
                        variant="info"
                        size="sm"
                        href="https://github.com/gusta-project/api"
                      >
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp; {t('documentation')}
                      </Button>
                    </Card.Footer>
                  </Card>
                  <Card bg="primary" text="white">
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h4>
                          <FontAwesomeIcon icon={faWindowRestore} />
                          &nbsp;{t('home_section_community_title')}
                        </h4>
                      </Card.Title>
                      <Card.Text>{t('home_section_community_text')}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        href="https://github.com/gusta-project/frontend"
                      >
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp; Source Code on GitHub
                      </Button>
                    </Card.Footer>
                  </Card>
                  <Card bg="info" text="white">
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h4>
                          <FontAwesomeIcon icon={faTools} />
                          &nbsp;{t('home_section_tools_title')}
                        </h4>
                      </Card.Title>
                      <Card.Text>{t('home_section_tools_text')}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        href="https://github.com/gusta-project"
                      >
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp; Project on GitHub
                      </Button>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Row>
              <Row>
                <CardGroup>
                  <Card border="success">
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h4>
                          <FontAwesomeIcon icon={faHandsHelping} />
                          &nbsp;{t('home_section_contribute_title')}
                        </h4>
                      </Card.Title>
                      <Card.Text>{t('home_section_contribute_text')}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button size="sm" href="https://github.com/gusta-project">
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp; Contribute
                      </Button>
                      &nbsp;
                      <Button as={Link} variant="success" size="sm" to="/about">
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp; About Us
                      </Button>
                    </Card.Footer>
                  </Card>
                  <Card border="warning">
                    <Card.Body>
                      <Card.Title className="text-center">
                        <h4>
                          <FontAwesomeIcon icon={faLanguage} />
                          &nbsp;{t('home_section_i18n_title')}
                        </h4>
                      </Card.Title>
                      <Card.Text>{t('home_section_i18n_text')}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button as={Link} size="sm" to="/i18n">
                        <FontAwesomeIcon icon={faCode} />
                        &nbsp; Translations
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
