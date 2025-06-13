import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projects';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Project = () => {
  const { t } = useTranslation('common');
  return (
    <Layout title={t('projects.philo.title')}>
      <Container>
        <Title>
          {t('projects.philo.title')} <Badge>05/2024</Badge>
        </Title>
        <P style={{ fontSize: 18, padding: 5 }}>
          {t('projects.philo.description1')}
        </P>
        <WorkImage src="/images/content/philo1.png" alt={t('projects.philo.alt', 'Philo image')} />
        <P>
          {t('projects.philo.description2')}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/AllanDantas21/philosophers" target="_blank">
              https://github.com/AllanDantas21/philosophers <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default Project;
